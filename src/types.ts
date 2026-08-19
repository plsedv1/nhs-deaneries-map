export interface Hospital {
  id: string
  name: string
  town: string
  lat: number
  lng: number
  trust?: string
}

export interface City {
  id: string
  name: string
  hospitals: Hospital[]
}

/** Geographic subgroup within a foundation school */
export interface Subgroup {
  id: string
  name: string
  description?: string
  cities: City[]
}

/**
 * UK Foundation Programme foundation school.
 * Source: https://foundationprogramme.nhs.uk/programmes/2-year-foundation-programme/ukfp/foundation-schools/
 */
export interface FoundationSchool {
  id: string
  name: string
  shortName: string
  color: string
  center: [number, number]
  /** Closed ring as [lng, lat][] for GeoJSON Polygon */
  polygon: [number, number][]
  medicalSchools: string[]
  sourceUrl: string
  /** Summary "Includes" from the UKFPO overview page */
  includes: string[]
  subgroups: Subgroup[]
}
