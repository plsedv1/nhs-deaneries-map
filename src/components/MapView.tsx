import { useEffect, useMemo } from 'react'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  CircleMarker,
  useMap,
} from 'react-leaflet'
import L from 'leaflet'
import type { City, FoundationSchool, Hospital, Subgroup } from '../types'
import { foundationSchools } from '../data/deaneries'
import 'leaflet/dist/leaflet.css'

type SchoolFeatureCollection = {
  type: 'FeatureCollection'
  features: Array<{
    type: 'Feature'
    properties: { id: string; name: string; color: string }
    geometry: { type: 'Polygon'; coordinates: [number, number][][] }
  }>
}

const hospitalIcon = L.divIcon({
  className: 'hospital-marker',
  html: '<span class="hospital-marker__dot"></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

function cityCenter(city: City): [number, number] {
  const lat =
    city.hospitals.reduce((sum, h) => sum + h.lat, 0) /
    Math.max(city.hospitals.length, 1)
  const lng =
    city.hospitals.reduce((sum, h) => sum + h.lng, 0) /
    Math.max(city.hospitals.length, 1)
  return [lat, lng]
}

function subgroupCenter(subgroup: Subgroup): [number, number] {
  const points = subgroup.cities.map(cityCenter)
  if (points.length === 0) return [54.5, -2.5]
  const lat = points.reduce((s, p) => s + p[0], 0) / points.length
  const lng = points.reduce((s, p) => s + p[1], 0) / points.length
  return [lat, lng]
}

function FitBounds({
  school,
  subgroup,
  city,
  hospitals,
  selectedHospital,
}: {
  school: FoundationSchool | null
  subgroup: Subgroup | null
  city: City | null
  hospitals: Hospital[]
  selectedHospital: Hospital | null
}) {
  const map = useMap()

  useEffect(() => {
    if (selectedHospital) {
      map.flyTo([selectedHospital.lat, selectedHospital.lng], 12, { duration: 0.55 })
      return
    }
    if (hospitals.length > 0) {
      const bounds = L.latLngBounds(hospitals.map((h) => [h.lat, h.lng]))
      map.flyToBounds(bounds.pad(0.25), { duration: 0.7, maxZoom: 11 })
      return
    }
    if (subgroup) {
      const pts = subgroup.cities.flatMap((c) =>
        c.hospitals.map((h) => [h.lat, h.lng] as [number, number]),
      )
      if (pts.length > 0) {
        map.flyToBounds(L.latLngBounds(pts).pad(0.2), { duration: 0.7, maxZoom: 10 })
        return
      }
    }
    if (school) {
      const coords = school.polygon.map(([lng, lat]) => [lat, lng] as [number, number])
      map.flyToBounds(L.latLngBounds(coords).pad(0.08), { duration: 0.7 })
      return
    }
    map.flyTo([54.5, -2.5], 6, { duration: 0.7 })
  }, [map, school, subgroup, city, hospitals, selectedHospital])

  return null
}

type Props = {
  selectedSchoolId: string | null
  selectedSubgroupId: string | null
  selectedCityId: string | null
  selectedHospital: Hospital | null
  onSelectSchool: (id: string) => void
  onSelectSubgroup: (id: string) => void
  onSelectCity: (id: string) => void
  onSelectHospital: (hospital: Hospital) => void
}

export function MapView({
  selectedSchoolId,
  selectedSubgroupId,
  selectedCityId,
  selectedHospital,
  onSelectSchool,
  onSelectSubgroup,
  onSelectCity,
  onSelectHospital,
}: Props) {
  const selectedSchool =
    foundationSchools.find((d) => d.id === selectedSchoolId) ?? null
  const selectedSubgroup =
    selectedSchool?.subgroups.find((s) => s.id === selectedSubgroupId) ?? null
  const selectedCity =
    selectedSubgroup?.cities.find((c) => c.id === selectedCityId) ?? null

  const hospitals = selectedCity?.hospitals ?? []

  const geojson = useMemo<SchoolFeatureCollection>(() => {
    const list =
      selectedSchool && !selectedSubgroup
        ? [selectedSchool]
        : selectedSubgroup
          ? []
          : foundationSchools

    return {
      type: 'FeatureCollection',
      features: list.map((d) => ({
        type: 'Feature',
        properties: { id: d.id, name: d.name, color: d.color },
        geometry: {
          type: 'Polygon',
          coordinates: [d.polygon],
        },
      })),
    }
  }, [selectedSchool, selectedSubgroup])

  const subgroupMarkers = useMemo(() => {
    if (!selectedSchool || selectedSubgroup) return []
    return selectedSchool.subgroups.map((s) => ({
      subgroup: s,
      center: subgroupCenter(s),
    }))
  }, [selectedSchool, selectedSubgroup])

  const cityMarkers = useMemo(() => {
    if (!selectedSubgroup || selectedCity) return []
    return selectedSubgroup.cities.map((c) => ({
      city: c,
      center: cityCenter(c),
    }))
  }, [selectedSubgroup, selectedCity])

  return (
    <MapContainer
      center={[54.5, -2.5]}
      zoom={6}
      className="map-root"
      zoomControl={false}
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <FitBounds
        school={selectedSchool}
        subgroup={selectedSubgroup}
        city={selectedCity}
        hospitals={hospitals}
        selectedHospital={selectedHospital}
      />

      {geojson.features.length > 0 && (
        <GeoJSON
          key={`${selectedSchoolId ?? 'uk'}-${selectedSubgroupId ?? 'none'}`}
          data={geojson}
          style={(feature) => {
            const id = feature?.properties?.id as string
            const color = (feature?.properties?.color as string) ?? '#005EB8'
            const active = selectedSchoolId === id
            return {
              color,
              weight: active ? 2.5 : 1.5,
              fillColor: color,
              fillOpacity: active ? 0.45 : selectedSchoolId ? 0.08 : 0.32,
              opacity: 0.9,
            }
          }}
          onEachFeature={(feature, layer) => {
            const id = feature.properties?.id as string
            const name = feature.properties?.name as string
            layer.bindTooltip(name, { sticky: true, className: 'map-tooltip' })
            layer.on({
              click: () => onSelectSchool(id),
              mouseover: (e) => {
                const target = e.target as L.Path
                target.setStyle({ fillOpacity: 0.55, weight: 2.5 })
              },
              mouseout: (e) => {
                const target = e.target as L.Path
                const active = selectedSchoolId === id
                target.setStyle({
                  fillOpacity: active ? 0.45 : selectedSchoolId ? 0.08 : 0.32,
                  weight: active ? 2.5 : 1.5,
                })
              },
            })
          }}
        />
      )}

      {subgroupMarkers.map(({ subgroup, center }) => (
        <CircleMarker
          key={subgroup.id}
          center={center}
          radius={11}
          pathOptions={{
            color: selectedSchool?.color ?? '#005EB8',
            fillColor: '#fff',
            fillOpacity: 0.95,
            weight: 3,
          }}
          eventHandlers={{ click: () => onSelectSubgroup(subgroup.id) }}
        >
          <Popup>
            <strong>{subgroup.name}</strong>
            <br />
            {subgroup.cities.length} cities — click to open
          </Popup>
        </CircleMarker>
      ))}

      {cityMarkers.map(({ city, center }) => (
        <CircleMarker
          key={city.id}
          center={center}
          radius={8}
          pathOptions={{
            color: selectedSchool?.color ?? '#005EB8',
            fillColor: selectedSchool?.color ?? '#005EB8',
            fillOpacity: 0.85,
            weight: 2,
          }}
          eventHandlers={{ click: () => onSelectCity(city.id) }}
        >
          <Popup>
            <strong>{city.name}</strong>
            <br />
            {city.hospitals.length} hospitals — click to open
          </Popup>
        </CircleMarker>
      ))}

      {hospitals.map((h) => (
        <Marker
          key={h.id}
          position={[h.lat, h.lng]}
          icon={hospitalIcon}
          eventHandlers={{ click: () => onSelectHospital(h) }}
        >
          <Popup>
            <strong>{h.name}</strong>
            <br />
            {h.town}
            {h.trust ? (
              <>
                <br />
                <span className="popup-trust">{h.trust}</span>
              </>
            ) : null}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
