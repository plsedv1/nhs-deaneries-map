import type { City, FoundationSchool, Hospital, Subgroup } from '../types'
import {
  countCitiesInSubgroup,
  countHospitals,
  countHospitalsInSubgroup,
  foundationSchools,
} from '../data/deaneries'

type Props = {
  selectedSchool: FoundationSchool | null
  selectedSubgroup: Subgroup | null
  selectedCity: City | null
  selectedHospital: Hospital | null
  onSelectSchool: (id: string) => void
  onSelectSubgroup: (id: string) => void
  onSelectCity: (id: string) => void
  onSelectHospital: (hospital: Hospital) => void
  onBack: () => void
  onReset: () => void
}

export function Sidebar({
  selectedSchool,
  selectedSubgroup,
  selectedCity,
  selectedHospital,
  onSelectSchool,
  onSelectSubgroup,
  onSelectCity,
  onSelectHospital,
  onBack,
  onReset,
}: Props) {
  const title = selectedCity
    ? selectedCity.name
    : selectedSubgroup
      ? selectedSubgroup.name
      : selectedSchool
        ? selectedSchool.name
        : 'UK Foundation Schools'

  const subtitle = selectedCity
    ? `${selectedCity.hospitals.length} hospitals`
    : selectedSubgroup
      ? `${countCitiesInSubgroup(selectedSubgroup)} cities · ${countHospitalsInSubgroup(selectedSubgroup)} hospitals`
      : selectedSchool
        ? `${selectedSchool.subgroups.length} subgroups · ${countHospitals(selectedSchool)} hospitals`
        : '18 foundation schools (UKFPO)'

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <p className="sidebar__brand">UK Foundation Programme</p>
        <h1 className="sidebar__title">{title}</h1>
        <p className="sidebar__subtitle">{subtitle}</p>

        <div className="sidebar__nav">
          {(selectedSchool || selectedSubgroup || selectedCity) && (
            <button type="button" className="btn btn--ghost" onClick={onBack}>
              ← Back
            </button>
          )}
          {(selectedSchool || selectedSubgroup || selectedCity) && (
            <button type="button" className="btn btn--ghost" onClick={onReset}>
              All UK
            </button>
          )}
        </div>

        {(selectedSchool || selectedSubgroup || selectedCity) && (
          <ol className="breadcrumb">
            {selectedSchool && (
              <li>
                <button type="button" onClick={() => onSelectSchool(selectedSchool.id)}>
                  {selectedSchool.shortName}
                </button>
              </li>
            )}
            {selectedSubgroup && (
              <li>
                <button
                  type="button"
                  onClick={() => onSelectSubgroup(selectedSubgroup.id)}
                >
                  {selectedSubgroup.name}
                </button>
              </li>
            )}
            {selectedCity && <li aria-current="page">{selectedCity.name}</li>}
          </ol>
        )}
      </header>

      <div className="sidebar__body">
        {!selectedSchool && (
          <ul className="list">
            {foundationSchools.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  className="list__item"
                  onClick={() => onSelectSchool(d.id)}
                  style={{ ['--accent' as string]: d.color }}
                >
                  <span className="list__swatch" />
                  <span className="list__content">
                    <span className="list__name">{d.name}</span>
                    <span className="list__meta">
                      {d.subgroups.length} subgroups · Includes: {d.includes.join(', ')}
                    </span>
                  </span>
                  <span className="list__chevron">›</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {selectedSchool && !selectedSubgroup && (
          <>
            <p className="panel-hint">
              Choose a subgroup first. Cities are listed in the next step.
            </p>
            {selectedSchool.medicalSchools.length > 0 && (
              <p className="panel-hint panel-hint--secondary">
                Linked medical schools: {selectedSchool.medicalSchools.join(', ')}
              </p>
            )}
            <ul className="list">
              {selectedSchool.subgroups.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className="list__item"
                    onClick={() => onSelectSubgroup(s.id)}
                    style={{ ['--accent' as string]: selectedSchool.color }}
                  >
                    <span className="list__swatch" />
                    <span className="list__content">
                      <span className="list__name">{s.name}</span>
                      <span className="list__meta">
                        {countCitiesInSubgroup(s)} cities ·{' '}
                        {countHospitalsInSubgroup(s)} hospitals
                        {s.description ? ` · ${s.description}` : ''}
                      </span>
                    </span>
                    <span className="list__chevron">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {selectedSubgroup && !selectedCity && (
          <>
            <p className="panel-hint">Choose a city to see hospitals and map markers.</p>
            <ul className="list">
              {selectedSubgroup.cities.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="list__item"
                    onClick={() => onSelectCity(c.id)}
                    style={{ ['--accent' as string]: selectedSchool?.color ?? '#005EB8' }}
                  >
                    <span className="list__swatch" />
                    <span className="list__content">
                      <span className="list__name">{c.name}</span>
                      <span className="list__meta">
                        {c.hospitals.length} hospital
                        {c.hospitals.length === 1 ? '' : 's'}
                      </span>
                    </span>
                    <span className="list__chevron">›</span>
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {selectedCity && (
          <ul className="list list--hospitals">
            {selectedCity.hospitals.map((h) => (
              <li key={h.id}>
                <button
                  type="button"
                  className={`list__item ${selectedHospital?.id === h.id ? 'is-active' : ''}`}
                  onClick={() => onSelectHospital(h)}
                  style={{
                    ['--accent' as string]: selectedSchool?.color ?? '#005EB8',
                  }}
                >
                  <span className="list__pin" aria-hidden />
                  <span className="list__content">
                    <span className="list__name">{h.name}</span>
                    <span className="list__meta">
                      {h.town}
                      {h.trust ? ` · ${h.trust}` : ''}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <footer className="sidebar__footer">
        Source:{' '}
        <a
          href={
            selectedSchool?.sourceUrl ??
            'https://foundationprogramme.nhs.uk/programmes/2-year-foundation-programme/ukfp/foundation-schools/'
          }
          target="_blank"
          rel="noreferrer"
        >
          UK Foundation Programme — Foundation Schools
        </a>
        . Region outlines are approximate for the map, not official boundaries.
      </footer>
    </aside>
  )
}
