import { useCallback, useMemo, useState } from 'react'
import { MapView } from './components/MapView'
import { Sidebar } from './components/Sidebar'
import {
  getCity,
  getFoundationSchool,
  getSubgroup,
} from './data/deaneries'
import type { Hospital } from './types'
import './App.css'

export default function App() {
  const [schoolId, setSchoolId] = useState<string | null>(null)
  const [subgroupId, setSubgroupId] = useState<string | null>(null)
  const [cityId, setCityId] = useState<string | null>(null)
  const [hospital, setHospital] = useState<Hospital | null>(null)

  const selectedSchool = useMemo(
    () => (schoolId ? getFoundationSchool(schoolId) ?? null : null),
    [schoolId],
  )
  const selectedSubgroup = useMemo(
    () =>
      schoolId && subgroupId ? getSubgroup(schoolId, subgroupId) ?? null : null,
    [schoolId, subgroupId],
  )
  const selectedCity = useMemo(
    () =>
      schoolId && subgroupId && cityId
        ? getCity(schoolId, subgroupId, cityId) ?? null
        : null,
    [schoolId, subgroupId, cityId],
  )

  const onSelectSchool = useCallback((id: string) => {
    setSchoolId(id)
    setSubgroupId(null)
    setCityId(null)
    setHospital(null)
  }, [])

  const onSelectSubgroup = useCallback((id: string) => {
    setSubgroupId(id)
    setCityId(null)
    setHospital(null)
  }, [])

  const onSelectCity = useCallback((id: string) => {
    setCityId(id)
    setHospital(null)
  }, [])

  const onSelectHospital = useCallback((h: Hospital) => {
    setHospital(h)
  }, [])

  const onBack = useCallback(() => {
    if (cityId) {
      setCityId(null)
      setHospital(null)
      return
    }
    if (subgroupId) {
      setSubgroupId(null)
      setHospital(null)
      return
    }
    setSchoolId(null)
    setHospital(null)
  }, [cityId, subgroupId])

  const onReset = useCallback(() => {
    setSchoolId(null)
    setSubgroupId(null)
    setCityId(null)
    setHospital(null)
  }, [])

  return (
    <div className="app">
      <Sidebar
        selectedSchool={selectedSchool}
        selectedSubgroup={selectedSubgroup}
        selectedCity={selectedCity}
        selectedHospital={hospital}
        onSelectSchool={onSelectSchool}
        onSelectSubgroup={onSelectSubgroup}
        onSelectCity={onSelectCity}
        onSelectHospital={onSelectHospital}
        onBack={onBack}
        onReset={onReset}
      />
      <main className="map-pane">
        <MapView
          selectedSchoolId={schoolId}
          selectedSubgroupId={subgroupId}
          selectedCityId={cityId}
          selectedHospital={hospital}
          onSelectSchool={onSelectSchool}
          onSelectSubgroup={onSelectSubgroup}
          onSelectCity={onSelectCity}
          onSelectHospital={onSelectHospital}
        />
        <div className="map-legend">
          {!schoolId && <span>Click a region / foundation school</span>}
          {schoolId && !subgroupId && <span>Select a subgroup</span>}
          {subgroupId && !cityId && <span>Select a city to show hospitals</span>}
          {cityId && (
            <span>
              {selectedCity?.hospitals.length ?? 0} hospitals in{' '}
              {selectedCity?.name}
              {hospital ? ` · ${hospital.name}` : ''}
            </span>
          )}
        </div>
      </main>
    </div>
  )
}
