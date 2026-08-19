import type { FoundationSchool } from '../types'

const BASE =
  'https://foundationprogramme.nhs.uk/programmes/2-year-foundation-programme/ukfp/foundation-schools'

/**
 * Region (foundation school) → Subgroup → City → Hospitals
 * Source: UKFPO foundation schools pages
 */
export const foundationSchools: FoundationSchool[] = [
  {
    id: 'east-of-england',
    name: 'East of England',
    shortName: 'East of England',
    color: '#1B4F72',
    center: [52.2, 0.5],
    polygon: [
      [-0.6, 52.9],
      [0.5, 53],
      [1.8, 52.8],
      [1.8, 51.7],
      [1.3, 51.5],
      [0.3, 51.6],
      [-0.5, 51.7],
      [-0.7, 52],
      [-0.6, 52.9],
    ],
    medicalSchools: ['Norwich Medical School', 'University of Cambridge', 'Anglia Ruskin University'],
    sourceUrl: `${BASE}/east-of-england-foundation-school/`,
    includes: ['Cambridge', 'Norwich', 'Bedford', 'Chelmsford', 'North Hertfordshire'],
    subgroups: [
      {
        id: 'eoe-north',
        name: 'Cambridgeshire, Norfolk & Suffolk',
        cities: [
          {
            id: 'cambridge',
            name: 'Cambridge',
            hospitals: [
              { id: 'addenbrookes', name: 'Addenbrooke\'s Hospital', town: 'Cambridge', lat: 52.175, lng: 0.14, trust: 'Cambridge University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'norwich',
            name: 'Norwich',
            hospitals: [
              { id: 'nnuh', name: 'Norfolk and Norwich University Hospital', town: 'Norwich', lat: 52.617, lng: 1.22, trust: 'Norfolk and Norwich University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'great-yarmouth',
            name: 'Great Yarmouth',
            hospitals: [
              { id: 'jph', name: 'James Paget University Hospital', town: 'Great Yarmouth', lat: 52.561, lng: 1.716, trust: 'James Paget University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'kings-lynn',
            name: 'King\'s Lynn',
            hospitals: [
              { id: 'qehkl', name: 'Queen Elizabeth Hospital', town: 'King\'s Lynn', lat: 52.755, lng: 0.445, trust: 'The Queen Elizabeth Hospital King\'s Lynn NHS Foundation Trust' },
            ],
          },
          {
            id: 'ipswich',
            name: 'Ipswich',
            hospitals: [
              { id: 'ipswich-h', name: 'Ipswich Hospital', town: 'Ipswich', lat: 52.057, lng: 1.198, trust: 'East Suffolk and North Essex NHS Foundation Trust' },
            ],
          },
          {
            id: 'colchester',
            name: 'Colchester',
            hospitals: [
              { id: 'colchester-h', name: 'Colchester Hospital', town: 'Colchester', lat: 51.91, lng: 0.899, trust: 'East Suffolk and North Essex NHS Foundation Trust' },
            ],
          },
          {
            id: 'peterborough',
            name: 'Peterborough',
            hospitals: [
              { id: 'pch', name: 'Peterborough City Hospital', town: 'Peterborough', lat: 52.586, lng: -0.278, trust: 'North West Anglia NHS Foundation Trust' },
            ],
          },
          {
            id: 'huntingdon',
            name: 'Huntingdon',
            hospitals: [
              { id: 'hinchingbrooke', name: 'Hinchingbrooke Hospital', town: 'Huntingdon', lat: 52.336, lng: -0.206, trust: 'North West Anglia NHS Foundation Trust' },
            ],
          },
          {
            id: 'west-suffolk',
            name: 'West Suffolk',
            hospitals: [
              { id: 'wsh', name: 'West Suffolk Hospital', town: 'Bury St Edmunds', lat: 52.241, lng: 0.71, trust: 'West Suffolk NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'eoe-south',
        name: 'Essex, Bedfordshire & Hertfordshire',
        cities: [
          {
            id: 'bedford',
            name: 'Bedford',
            hospitals: [
              { id: 'bedford-h', name: 'Bedford Hospital', town: 'Bedford', lat: 52.14, lng: -0.475, trust: 'Bedfordshire Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'luton',
            name: 'Luton',
            hospitals: [
              { id: 'ldh', name: 'Luton and Dunstable University Hospital', town: 'Luton', lat: 51.892, lng: -0.452, trust: 'Bedfordshire Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'chelmsford',
            name: 'Chelmsford',
            hospitals: [
              { id: 'broomfield', name: 'Broomfield Hospital', town: 'Chelmsford', lat: 51.771, lng: 0.465, trust: 'Mid and South Essex NHS Foundation Trust' },
            ],
          },
          {
            id: 'basildon',
            name: 'Basildon',
            hospitals: [
              { id: 'basildon-h', name: 'Basildon University Hospital', town: 'Basildon', lat: 51.56, lng: 0.45, trust: 'Mid and South Essex NHS Foundation Trust' },
            ],
          },
          {
            id: 'southend',
            name: 'Southend',
            hospitals: [
              { id: 'southend-h', name: 'Southend University Hospital', town: 'Southend-on-Sea', lat: 51.554, lng: 0.709, trust: 'Mid and South Essex NHS Foundation Trust' },
            ],
          },
          {
            id: 'harlow',
            name: 'Harlow',
            hospitals: [
              { id: 'pah', name: 'Princess Alexandra Hospital', town: 'Harlow', lat: 51.772, lng: 0.085, trust: 'The Princess Alexandra Hospital NHS Trust' },
            ],
          },
          {
            id: 'watford',
            name: 'Watford / West Hertfordshire',
            hospitals: [
              { id: 'watford-h', name: 'Watford General Hospital', town: 'Watford', lat: 51.649, lng: -0.39, trust: 'West Hertfordshire Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'north-herts',
            name: 'North Hertfordshire',
            hospitals: [
              { id: 'lister', name: 'Lister Hospital', town: 'Stevenage', lat: 51.916, lng: -0.21, trust: 'East and North Hertfordshire NHS Trust' },
            ],
          },
          {
            id: 'clacton-maldon',
            name: 'Clacton-on-Sea / Maldon',
            hospitals: [
              { id: 'clacton', name: 'Clacton Hospital', town: 'Clacton-on-Sea', lat: 51.794, lng: 1.15, trust: 'East Suffolk and North Essex NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kss',
    name: 'Kent, Surrey and Sussex',
    shortName: 'KSS',
    color: '#C0392B',
    center: [51.15, 0.3],
    polygon: [
      [-0.8, 51.45],
      [0, 51.5],
      [1.5, 51.4],
      [1.5, 50.7],
      [0.7, 50.7],
      [-0.9, 50.7],
      [-0.9, 51.2],
      [-0.8, 51.45],
    ],
    medicalSchools: ['Brighton and Sussex Medical School', 'Kent and Medway Medical School'],
    sourceUrl: `${BASE}/kent-surrey-and-sussex-foundation-school/`,
    includes: ['Brighton', 'Canterbury', 'Dartford', 'Frimley', 'Guildford', 'Maidstone', 'Margate', 'Worthing'],
    subgroups: [
      {
        id: 'kss-kent',
        name: 'Kent & Medway',
        cities: [
          {
            id: 'ashford',
            name: 'Ashford',
            hospitals: [
              { id: 'whh', name: 'William Harvey Hospital', town: 'Ashford', lat: 51.141, lng: 0.915, trust: 'East Kent Hospitals University NHS Foundation Trust' },
            ],
          },
          {
            id: 'canterbury',
            name: 'Canterbury',
            hospitals: [
              { id: 'kch', name: 'Kent and Canterbury Hospital', town: 'Canterbury', lat: 51.266, lng: 1.087, trust: 'East Kent Hospitals University NHS Foundation Trust' },
            ],
          },
          {
            id: 'margate',
            name: 'Margate',
            hospitals: [
              { id: 'qeqm', name: 'Queen Elizabeth The Queen Mother Hospital', town: 'Margate', lat: 51.379, lng: 1.39, trust: 'East Kent Hospitals University NHS Foundation Trust' },
            ],
          },
          {
            id: 'maidstone',
            name: 'Maidstone',
            hospitals: [
              { id: 'maidstone-h', name: 'Maidstone Hospital', town: 'Maidstone', lat: 51.274, lng: 0.491, trust: 'Maidstone and Tunbridge Wells NHS Trust' },
            ],
          },
          {
            id: 'pembury',
            name: 'Pembury',
            hospitals: [
              { id: 'tunbridge', name: 'Tunbridge Wells Hospital', town: 'Pembury', lat: 51.16, lng: 0.309, trust: 'Maidstone and Tunbridge Wells NHS Trust' },
            ],
          },
          {
            id: 'dartford',
            name: 'Dartford',
            hospitals: [
              { id: 'dvh', name: 'Darent Valley Hospital', town: 'Dartford', lat: 51.435, lng: 0.26, trust: 'Dartford and Gravesham NHS Trust' },
            ],
          },
          {
            id: 'gillingham',
            name: 'Gillingham',
            hospitals: [
              { id: 'medway', name: 'Medway Maritime Hospital', town: 'Gillingham', lat: 51.38, lng: 0.54, trust: 'Medway NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'kss-ss',
        name: 'Surrey & Sussex',
        cities: [
          {
            id: 'brighton',
            name: 'Brighton',
            hospitals: [
              { id: 'rsch', name: 'Royal Sussex County Hospital', town: 'Brighton', lat: 50.819, lng: -0.118, trust: 'University Hospitals Sussex NHS Foundation Trust' },
            ],
          },
          {
            id: 'worthing',
            name: 'Worthing',
            hospitals: [
              { id: 'worthing-h', name: 'Worthing Hospital', town: 'Worthing', lat: 50.817, lng: -0.365, trust: 'University Hospitals Sussex NHS Foundation Trust' },
            ],
          },
          {
            id: 'chichester',
            name: 'Chichester',
            hospitals: [
              { id: 'st-richards', name: 'St Richard\'s Hospital', town: 'Chichester', lat: 50.843, lng: -0.759, trust: 'University Hospitals Sussex NHS Foundation Trust' },
            ],
          },
          {
            id: 'eastbourne',
            name: 'Eastbourne',
            hospitals: [
              { id: 'eastbourne-h', name: 'Eastbourne District General Hospital', town: 'Eastbourne', lat: 50.786, lng: 0.269, trust: 'East Sussex Healthcare NHS Trust' },
            ],
          },
          {
            id: 'st-leonards',
            name: 'St Leonards-on-Sea',
            hospitals: [
              { id: 'conquest', name: 'Conquest Hospital', town: 'St Leonards-on-Sea', lat: 50.875, lng: 0.567, trust: 'East Sussex Healthcare NHS Trust' },
            ],
          },
          {
            id: 'haywards-heath',
            name: 'Haywards Heath',
            hospitals: [
              { id: 'prh-hh', name: 'Princess Royal Hospital', town: 'Haywards Heath', lat: 50.998, lng: -0.093, trust: 'University Hospitals Sussex NHS Foundation Trust' },
            ],
          },
          {
            id: 'guildford',
            name: 'Guildford',
            hospitals: [
              { id: 'royal-surrey', name: 'Royal Surrey County Hospital', town: 'Guildford', lat: 51.24, lng: -0.607, trust: 'Royal Surrey NHS Foundation Trust' },
            ],
          },
          {
            id: 'frimley',
            name: 'Frimley',
            hospitals: [
              { id: 'frimley-h', name: 'Frimley Park Hospital', town: 'Frimley', lat: 51.32, lng: -0.743, trust: 'Frimley Health NHS Foundation Trust' },
            ],
          },
          {
            id: 'redhill',
            name: 'Redhill',
            hospitals: [
              { id: 'east-surrey', name: 'East Surrey Hospital', town: 'Redhill', lat: 51.22, lng: -0.163, trust: 'Surrey and Sussex Healthcare NHS Trust' },
            ],
          },
          {
            id: 'chertsey',
            name: 'Chertsey',
            hospitals: [
              { id: 'st-peters', name: 'St Peter\'s Hospital', town: 'Chertsey', lat: 51.377, lng: -0.525, trust: 'Ashford and St Peter\'s Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'lnr',
    name: 'Leicestershire, Northamptonshire and Rutland',
    shortName: 'LNR',
    color: '#0B6E4F',
    center: [52.45, -0.95],
    polygon: [
      [-1.4, 52.85],
      [-0.5, 52.85],
      [-0.5, 52.1],
      [-1.2, 52.05],
      [-1.4, 52.3],
      [-1.4, 52.85],
    ],
    medicalSchools: ['University of Leicester'],
    sourceUrl: `${BASE}/leicestershire-northamptonshire-and-rutland-foundation-school/`,
    includes: ['Evington', 'Kettering', 'Leicester', 'Northampton'],
    subgroups: [
      {
        id: 'lnr-leics',
        name: 'Leicestershire',
        cities: [
          {
            id: 'leicester',
            name: 'Leicester',
            hospitals: [
              { id: 'lri', name: 'Leicester Royal Infirmary', town: 'Leicester', lat: 52.627, lng: -1.135, trust: 'University Hospitals of Leicester NHS Trust' },
              { id: 'glenfield', name: 'Glenfield Hospital', town: 'Leicester', lat: 52.656, lng: -1.182, trust: 'University Hospitals of Leicester NHS Trust' },
            ],
          },
          {
            id: 'evington',
            name: 'Evington',
            hospitals: [
              { id: 'lgh', name: 'Leicester General Hospital', town: 'Evington', lat: 52.625, lng: -1.08, trust: 'University Hospitals of Leicester NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'lnr-northants',
        name: 'Northamptonshire',
        cities: [
          {
            id: 'kettering',
            name: 'Kettering',
            hospitals: [
              { id: 'kgh', name: 'Kettering General Hospital', town: 'Kettering', lat: 52.401, lng: -0.74, trust: 'Kettering General Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'northampton',
            name: 'Northampton',
            hospitals: [
              { id: 'ngh', name: 'Northampton General Hospital', town: 'Northampton', lat: 52.236, lng: -0.883, trust: 'Northampton General Hospital NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'london',
    name: 'London',
    shortName: 'London',
    color: '#8E44AD',
    center: [51.5, -0.12],
    polygon: [
      [-0.55, 51.7],
      [0.25, 51.68],
      [0.3, 51.4],
      [0.15, 51.35],
      [-0.35, 51.35],
      [-0.55, 51.45],
      [-0.55, 51.7],
    ],
    medicalSchools: ['Queen Mary University of London', 'University College London', 'Imperial College London', 'King\'s College London', 'St George\'s University London'],
    sourceUrl: `${BASE}/london-foundation-school/`,
    includes: ['Croydon', 'Ealing', 'Ilford', 'Kingston', 'Lewisham', 'North Middlesex', 'Westminster'],
    subgroups: [
      {
        id: 'lon-ne',
        name: 'North & East London',
        cities: [
          {
            id: 'westminster',
            name: 'Westminster',
            hospitals: [
              { id: 'st-thomas', name: 'St Thomas\' Hospital', town: 'Westminster', lat: 51.499, lng: -0.119, trust: 'Guy\'s and St Thomas\' NHS Foundation Trust' },
            ],
          },
          {
            id: 'marylebone',
            name: 'Marylebone',
            hospitals: [
              { id: 'uclh', name: 'University College Hospital', town: 'Marylebone / Bloomsbury', lat: 51.524, lng: -0.135, trust: 'University College London Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'whitechapel',
            name: 'Whitechapel',
            hospitals: [
              { id: 'rlh', name: 'Royal London Hospital', town: 'Whitechapel', lat: 51.518, lng: -0.059, trust: 'Barts Health NHS Trust' },
            ],
          },
          {
            id: 'whipps-cross',
            name: 'Whipps Cross / Leytonstone',
            hospitals: [
              { id: 'whipps', name: 'Whipps Cross Hospital', town: 'Leytonstone', lat: 51.579, lng: 0.002, trust: 'Barts Health NHS Trust' },
            ],
          },
          {
            id: 'newham',
            name: 'Newham / Plaistow',
            hospitals: [
              { id: 'newham-h', name: 'Newham University Hospital', town: 'Plaistow', lat: 51.523, lng: 0.036, trust: 'Barts Health NHS Trust' },
            ],
          },
          {
            id: 'homerton',
            name: 'Homerton',
            hospitals: [
              { id: 'homerton-h', name: 'Homerton University Hospital', town: 'Homerton', lat: 51.55, lng: -0.046, trust: 'Homerton Healthcare NHS Foundation Trust' },
            ],
          },
          {
            id: 'north-middlesex',
            name: 'North Middlesex / Enfield',
            hospitals: [
              { id: 'north-mid', name: 'North Middlesex University Hospital', town: 'Enfield', lat: 51.612, lng: -0.074, trust: 'North Middlesex University Hospital NHS Trust' },
            ],
          },
          {
            id: 'romford',
            name: 'Romford / Havering',
            hospitals: [
              { id: 'queens-romford', name: 'Queen\'s Hospital', town: 'Romford', lat: 51.567, lng: 0.178, trust: 'Barking, Havering and Redbridge University Hospitals NHS Trust' },
            ],
          },
          {
            id: 'ilford',
            name: 'Ilford / Redbridge',
            hospitals: [
              { id: 'king-george', name: 'King George Hospital', town: 'Ilford', lat: 51.58, lng: 0.11, trust: 'Barking, Havering and Redbridge University Hospitals NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'lon-west',
        name: 'West & North West London',
        cities: [
          {
            id: 'chelsea',
            name: 'Chelsea',
            hospitals: [
              { id: 'chelsea-h', name: 'Chelsea and Westminster Hospital', town: 'Chelsea', lat: 51.484, lng: -0.182, trust: 'Chelsea and Westminster Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'charing-cross',
            name: 'Charing Cross / Hammersmith',
            hospitals: [
              { id: 'cxh', name: 'Charing Cross Hospital', town: 'Hammersmith', lat: 51.487, lng: -0.219, trust: 'Imperial College Healthcare NHS Trust' },
            ],
          },
          {
            id: 'ealing',
            name: 'Ealing',
            hospitals: [
              { id: 'ealing-h', name: 'Ealing Hospital', town: 'Ealing', lat: 51.507, lng: -0.346, trust: 'London North West University Healthcare NHS Trust' },
            ],
          },
          {
            id: 'harrow',
            name: 'Harrow',
            hospitals: [
              { id: 'northwick', name: 'Northwick Park Hospital', town: 'Harrow', lat: 51.575, lng: -0.319, trust: 'London North West University Healthcare NHS Trust' },
            ],
          },
          {
            id: 'uxbridge',
            name: 'Uxbridge / Hayes',
            hospitals: [
              { id: 'hillingdon', name: 'Hillingdon Hospital', town: 'Uxbridge', lat: 51.533, lng: -0.46, trust: 'The Hillingdon Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'west-middlesex',
            name: 'Central and West Middlesex',
            hospitals: [
              { id: 'west-mid', name: 'West Middlesex University Hospital', town: 'Isleworth', lat: 51.474, lng: -0.326, trust: 'Chelsea and Westminster Hospital NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'lon-south',
        name: 'South London',
        cities: [
          {
            id: 'camberwell',
            name: 'Camberwell',
            hospitals: [
              { id: 'kings', name: 'King\'s College Hospital', town: 'Camberwell', lat: 51.468, lng: -0.094, trust: 'King\'s College Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'lewisham',
            name: 'Lewisham',
            hospitals: [
              { id: 'lewisham-h', name: 'University Hospital Lewisham', town: 'Lewisham', lat: 51.453, lng: -0.017, trust: 'Lewisham and Greenwich NHS Trust' },
            ],
          },
          {
            id: 'woolwich',
            name: 'Woolwich',
            hospitals: [
              { id: 'qeh-woolwich', name: 'Queen Elizabeth Hospital', town: 'Woolwich', lat: 51.479, lng: 0.051, trust: 'Lewisham and Greenwich NHS Trust' },
            ],
          },
          {
            id: 'tooting',
            name: 'Tooting',
            hospitals: [
              { id: 'st-georges', name: 'St George\'s Hospital', town: 'Tooting', lat: 51.427, lng: -0.175, trust: 'St George\'s University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'kingston',
            name: 'Kingston',
            hospitals: [
              { id: 'kingston-h', name: 'Kingston Hospital', town: 'Kingston', lat: 51.414, lng: -0.283, trust: 'Kingston Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'croydon',
            name: 'Croydon',
            hospitals: [
              { id: 'croydon-h', name: 'Croydon University Hospital', town: 'Croydon', lat: 51.389, lng: -0.119, trust: 'Croydon Health Services NHS Trust' },
            ],
          },
          {
            id: 'bromley',
            name: 'Bromley',
            hospitals: [
              { id: 'pruh', name: 'Princess Royal University Hospital', town: 'Bromley', lat: 51.379, lng: 0.045, trust: 'King\'s College Hospital NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'north-west',
    name: 'North West of England',
    shortName: 'North West',
    color: '#117A65',
    center: [53.5, -2.5],
    polygon: [
      [-3.7, 54.5],
      [-2.2, 54.5],
      [-1.9, 53.6],
      [-2, 53],
      [-2.6, 53],
      [-3.3, 53.2],
      [-3.7, 53.5],
      [-3.7, 54.5],
    ],
    medicalSchools: ['University of Central Lancashire', 'University of Lancaster', 'University of Liverpool', 'University of Manchester', 'Edge Hill University'],
    sourceUrl: `${BASE}/north-west-of-england-foundation-school/`,
    includes: ['Blackpool', 'Crewe', 'Lancaster', 'Liverpool', 'Manchester', 'Southport', 'Wirral'],
    subgroups: [
      {
        id: 'nw-gm',
        name: 'Greater Manchester',
        cities: [
          {
            id: 'manchester',
            name: 'Manchester',
            hospitals: [
              { id: 'mri', name: 'Manchester Royal Infirmary', town: 'Manchester', lat: 53.462, lng: -2.227, trust: 'Manchester University NHS Foundation Trust' },
              { id: 'wythenshawe', name: 'Wythenshawe Hospital', town: 'Manchester', lat: 53.387, lng: -2.294, trust: 'Manchester University NHS Foundation Trust' },
            ],
          },
          {
            id: 'salford',
            name: 'Salford',
            hospitals: [
              { id: 'salford-h', name: 'Salford Royal Hospital', town: 'Salford', lat: 53.488, lng: -2.32, trust: 'Northern Care Alliance NHS Foundation Trust' },
            ],
          },
          {
            id: 'bolton',
            name: 'Bolton',
            hospitals: [
              { id: 'bolton-h', name: 'Royal Bolton Hospital', town: 'Bolton', lat: 53.554, lng: -2.43, trust: 'Bolton NHS Foundation Trust' },
            ],
          },
          {
            id: 'oldham',
            name: 'Oldham',
            hospitals: [
              { id: 'oldham-h', name: 'Royal Oldham Hospital', town: 'Oldham', lat: 53.557, lng: -2.125, trust: 'Northern Care Alliance NHS Foundation Trust' },
            ],
          },
          {
            id: 'stockport',
            name: 'Stockport',
            hospitals: [
              { id: 'stepping-hill', name: 'Stepping Hill Hospital', town: 'Stockport', lat: 53.394, lng: -2.132, trust: 'Stockport NHS Foundation Trust' },
            ],
          },
          {
            id: 'wigan',
            name: 'Wigan',
            hospitals: [
              { id: 'wigan-h', name: 'Royal Albert Edward Infirmary', town: 'Wigan', lat: 53.557, lng: -2.63, trust: 'Wrightington, Wigan and Leigh Teaching Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'nw-mersey',
        name: 'Cheshire & Merseyside',
        cities: [
          {
            id: 'liverpool',
            name: 'Liverpool',
            hospitals: [
              { id: 'rlbuht', name: 'Royal Liverpool University Hospital', town: 'Liverpool', lat: 53.409, lng: -2.964, trust: 'Liverpool University Hospitals NHS Foundation Trust' },
              { id: 'aintree', name: 'Aintree University Hospital', town: 'Liverpool', lat: 53.465, lng: -2.93, trust: 'Liverpool University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'prescot',
            name: 'Prescot / St Helens',
            hospitals: [
              { id: 'whiston', name: 'Whiston Hospital', town: 'Prescot', lat: 53.412, lng: -2.788, trust: 'Mersey and West Lancashire Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'southport',
            name: 'Southport',
            hospitals: [
              { id: 'southport-h', name: 'Southport and Formby District General Hospital', town: 'Southport', lat: 53.645, lng: -2.978, trust: 'Mersey and West Lancashire Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'wirral',
            name: 'Wirral / Bebington / Upton',
            hospitals: [
              { id: 'arrowe-park', name: 'Arrowe Park Hospital', town: 'Wirral', lat: 53.37, lng: -3.094, trust: 'Wirral University Teaching Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'warrington',
            name: 'Warrington',
            hospitals: [
              { id: 'warrington-h', name: 'Warrington Hospital', town: 'Warrington', lat: 53.394, lng: -2.59, trust: 'Warrington and Halton Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'crewe',
            name: 'Crewe',
            hospitals: [
              { id: 'leighton', name: 'Leighton Hospital', town: 'Crewe', lat: 53.118, lng: -2.478, trust: 'Mid Cheshire Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'chester',
            name: 'Cheshire (Chester)',
            hospitals: [
              { id: 'countess', name: 'Countess of Chester Hospital', town: 'Chester', lat: 53.21, lng: -2.899, trust: 'Countess of Chester Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'macclesfield',
            name: 'Macclesfield / Congleton',
            hospitals: [
              { id: 'macclesfield-h', name: 'Macclesfield District General Hospital', town: 'Macclesfield', lat: 53.26, lng: -2.14, trust: 'East Cheshire NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'nw-lancs',
        name: 'Lancashire & South Cumbria',
        cities: [
          {
            id: 'preston',
            name: 'Preston',
            hospitals: [
              { id: 'preston-h', name: 'Royal Preston Hospital', town: 'Preston', lat: 53.79, lng: -2.698, trust: 'Lancashire Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'chorley',
            name: 'Chorley',
            hospitals: [
              { id: 'chorley-h', name: 'Chorley and South Ribble Hospital', town: 'Chorley', lat: 53.665, lng: -2.66, trust: 'Lancashire Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'blackpool',
            name: 'Blackpool',
            hospitals: [
              { id: 'blackpool-h', name: 'Blackpool Victoria Hospital', town: 'Blackpool', lat: 53.82, lng: -3.026, trust: 'Blackpool Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'lancaster',
            name: 'Lancaster',
            hospitals: [
              { id: 'rli', name: 'Royal Lancaster Infirmary', town: 'Lancaster', lat: 54.043, lng: -2.798, trust: 'University Hospitals of Morecambe Bay NHS Foundation Trust' },
            ],
          },
          {
            id: 'blackburn',
            name: 'Blackburn',
            hospitals: [
              { id: 'blackburn-h', name: 'Royal Blackburn Hospital', town: 'Blackburn', lat: 53.736, lng: -2.466, trust: 'East Lancashire Hospitals NHS Trust' },
            ],
          },
          {
            id: 'burnley',
            name: 'Burnley',
            hospitals: [
              { id: 'burnley-h', name: 'Burnley General Hospital', town: 'Burnley', lat: 53.792, lng: -2.227, trust: 'East Lancashire Hospitals NHS Trust' },
            ],
          },
          {
            id: 'barrow',
            name: 'Barrow',
            hospitals: [
              { id: 'furness', name: 'Furness General Hospital', town: 'Barrow-in-Furness', lat: 54.12, lng: -3.227, trust: 'University Hospitals of Morecambe Bay NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'northern',
    name: 'Northern',
    shortName: 'Northern',
    color: '#2471A3',
    center: [54.8, -1.8],
    polygon: [
      [-3.6, 55.1],
      [-1.4, 55.85],
      [-0.9, 54.6],
      [-1.2, 54.3],
      [-2.8, 54.4],
      [-3.6, 54.6],
      [-3.6, 55.1],
    ],
    medicalSchools: ['Newcastle University', 'University of Sunderland'],
    sourceUrl: `${BASE}/northern-foundation-school/`,
    includes: ['Carlisle', 'Darlington', 'Durham', 'Newcastle', 'Northumberland', 'Sunderland'],
    subgroups: [
      {
        id: 'northern-tyne',
        name: 'Tyne & Wear / Northumberland',
        cities: [
          {
            id: 'newcastle',
            name: 'Newcastle',
            hospitals: [
              { id: 'rvi', name: 'Royal Victoria Infirmary', town: 'Newcastle', lat: 54.981, lng: -1.62, trust: 'The Newcastle upon Tyne Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'high-heaton',
            name: 'High Heaton',
            hospitals: [
              { id: 'freeman', name: 'Freeman Hospital', town: 'High Heaton', lat: 54.999, lng: -1.579, trust: 'The Newcastle upon Tyne Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'gateshead',
            name: 'Gateshead',
            hospitals: [
              { id: 'qe-gateshead', name: 'Queen Elizabeth Hospital', town: 'Gateshead', lat: 54.938, lng: -1.58, trust: 'Gateshead Health NHS Foundation Trust' },
            ],
          },
          {
            id: 'sunderland',
            name: 'Sunderland',
            hospitals: [
              { id: 'sunderland-h', name: 'Sunderland Royal Hospital', town: 'Sunderland', lat: 54.903, lng: -1.405, trust: 'South Tyneside and Sunderland NHS Foundation Trust' },
            ],
          },
          {
            id: 'south-tyneside',
            name: 'South Tyneside',
            hospitals: [
              { id: 'south-tyneside-h', name: 'South Tyneside District Hospital', town: 'South Shields', lat: 54.971, lng: -1.43, trust: 'South Tyneside and Sunderland NHS Foundation Trust' },
            ],
          },
          {
            id: 'northumberland',
            name: 'Northumberland / Northumbria',
            hospitals: [
              { id: 'nsech', name: 'Northumbria Specialist Emergency Care Hospital', town: 'Cramlington', lat: 55.085, lng: -1.594, trust: 'Northumbria Healthcare NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'northern-tees',
        name: 'Tees Valley & County Durham',
        cities: [
          {
            id: 'middlesbrough',
            name: 'Middlesbrough / Tees',
            hospitals: [
              { id: 'james-cook', name: 'James Cook University Hospital', town: 'Middlesbrough', lat: 54.552, lng: -1.214, trust: 'South Tees Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'durham',
            name: 'Durham',
            hospitals: [
              { id: 'uhnd', name: 'University Hospital of North Durham', town: 'Durham', lat: 54.787, lng: -1.592, trust: 'County Durham and Darlington NHS Foundation Trust' },
            ],
          },
          {
            id: 'darlington',
            name: 'Darlington',
            hospitals: [
              { id: 'darlington-h', name: 'Darlington Memorial Hospital', town: 'Darlington', lat: 54.53, lng: -1.564, trust: 'County Durham and Darlington NHS Foundation Trust' },
            ],
          },
          {
            id: 'stockton',
            name: 'Stockton-on-Tees',
            hospitals: [
              { id: 'uhnt', name: 'University Hospital of North Tees', town: 'Stockton-on-Tees', lat: 54.57, lng: -1.312, trust: 'North Tees and Hartlepool NHS Foundation Trust' },
            ],
          },
          {
            id: 'hartlepool',
            name: 'Hartlepool',
            hospitals: [
              { id: 'hartlepool-h', name: 'University Hospital of Hartlepool', town: 'Hartlepool', lat: 54.695, lng: -1.222, trust: 'North Tees and Hartlepool NHS Foundation Trust' },
            ],
          },
          {
            id: 'bishop-auckland',
            name: 'Bishop Auckland',
            hospitals: [
              { id: 'bishop-auckland-h', name: 'Bishop Auckland Hospital', town: 'Bishop Auckland', lat: 54.657, lng: -1.68, trust: 'County Durham and Darlington NHS Foundation Trust' },
            ],
          },
          {
            id: 'northallerton',
            name: 'Northallerton',
            hospitals: [
              { id: 'friarage', name: 'Friarage Hospital', town: 'Northallerton', lat: 54.342, lng: -1.432, trust: 'South Tees Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'northern-cumbria',
        name: 'North Cumbria',
        cities: [
          {
            id: 'carlisle',
            name: 'Carlisle',
            hospitals: [
              { id: 'cumberland', name: 'Cumberland Infirmary', town: 'Carlisle', lat: 54.897, lng: -2.958, trust: 'North Cumbria Integrated Care NHS Foundation Trust' },
            ],
          },
          {
            id: 'whitehaven',
            name: 'Whitehaven',
            hospitals: [
              { id: 'west-cumberland', name: 'West Cumberland Hospital', town: 'Whitehaven', lat: 54.528, lng: -3.569, trust: 'North Cumbria Integrated Care NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'northern-ireland',
    name: 'Northern Ireland',
    shortName: 'N. Ireland',
    color: '#1ABC9C',
    center: [54.6, -6.5],
    polygon: [
      [-8.2, 55.3],
      [-5.4, 55.3],
      [-5.4, 54],
      [-8.2, 54],
      [-8.2, 55.3],
    ],
    medicalSchools: ['Queen\'s University Belfast', 'Ulster University, School of Medicine'],
    sourceUrl: `${BASE}/northern-ireland-foundation-school/`,
    includes: ['Antrim', 'Belfast', 'Downpatrick', 'Londonderry', 'Newry', 'Omagh'],
    subgroups: [
      {
        id: 'ni-belfast',
        name: 'Belfast & South East',
        cities: [
          {
            id: 'belfast',
            name: 'Belfast',
            hospitals: [
              { id: 'rvh-belfast', name: 'Royal Victoria Hospital', town: 'Belfast', lat: 54.594, lng: -5.956, trust: 'Belfast Health and Social Care Trust' },
              { id: 'mater', name: 'Mater Hospital', town: 'Belfast', lat: 54.61, lng: -5.932, trust: 'Belfast Health and Social Care Trust' },
            ],
          },
          {
            id: 'dundonald',
            name: 'Dundonald',
            hospitals: [
              { id: 'ulster', name: 'Ulster Hospital', town: 'Dundonald', lat: 54.576, lng: -5.81, trust: 'South Eastern Health and Social Care Trust' },
            ],
          },
          {
            id: 'downpatrick',
            name: 'Downpatrick',
            hospitals: [
              { id: 'downe', name: 'Downe Hospital', town: 'Downpatrick', lat: 54.332, lng: -5.707, trust: 'South Eastern Health and Social Care Trust' },
            ],
          },
          {
            id: 'lisburn',
            name: 'Lisburn',
            hospitals: [
              { id: 'lagan-valley', name: 'Lagan Valley Hospital', town: 'Lisburn', lat: 54.512, lng: -6.043, trust: 'South Eastern Health and Social Care Trust' },
            ],
          },
        ],
      },
      {
        id: 'ni-nw',
        name: 'North & West',
        cities: [
          {
            id: 'antrim',
            name: 'Antrim',
            hospitals: [
              { id: 'antrim-h', name: 'Antrim Area Hospital', town: 'Antrim', lat: 54.726, lng: -6.215, trust: 'Northern Health and Social Care Trust' },
            ],
          },
          {
            id: 'londonderry',
            name: 'Londonderry',
            hospitals: [
              { id: 'altnagelvin', name: 'Altnagelvin Area Hospital', town: 'Londonderry', lat: 54.996, lng: -7.305, trust: 'Western Health and Social Care Trust' },
            ],
          },
          {
            id: 'coleraine',
            name: 'Coleraine',
            hospitals: [
              { id: 'causeway', name: 'Causeway Hospital', town: 'Coleraine', lat: 55.124, lng: -6.668, trust: 'Northern Health and Social Care Trust' },
            ],
          },
          {
            id: 'enniskillen',
            name: 'Enniskillen',
            hospitals: [
              { id: 'swah', name: 'South West Acute Hospital', town: 'Enniskillen', lat: 54.347, lng: -7.643, trust: 'Western Health and Social Care Trust' },
            ],
          },
          {
            id: 'omagh',
            name: 'Omagh',
            hospitals: [
              { id: 'tyrone', name: 'Tyrone County Hospital', town: 'Omagh', lat: 54.598, lng: -7.31, trust: 'Western Health and Social Care Trust' },
            ],
          },
        ],
      },
      {
        id: 'ni-south',
        name: 'Southern',
        cities: [
          {
            id: 'craigavon',
            name: 'Craigavon',
            hospitals: [
              { id: 'craigavon-h', name: 'Craigavon Area Hospital', town: 'Craigavon', lat: 54.45, lng: -6.41, trust: 'Southern Health and Social Care Trust' },
            ],
          },
          {
            id: 'newry',
            name: 'Newry',
            hospitals: [
              { id: 'daisy-hill', name: 'Daisy Hill Hospital', town: 'Newry', lat: 54.175, lng: -6.34, trust: 'Southern Health and Social Care Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'oxford',
    name: 'Oxford (Thames Valley)',
    shortName: 'Oxford / TV',
    color: '#B9770E',
    center: [51.7, -1],
    polygon: [
      [-1.7, 52.2],
      [-0.5, 52.15],
      [-0.45, 51.5],
      [-0.7, 51.35],
      [-1.5, 51.35],
      [-1.7, 51.7],
      [-1.7, 52.2],
    ],
    medicalSchools: ['University of Oxford', 'University of Buckingham'],
    sourceUrl: `${BASE}/oxford-thames-valley-foundation-school/`,
    includes: ['Aylesbury', 'Berkshire', 'Buckingham', 'Milton Keynes', 'Oxford', 'Reading', 'Slough'],
    subgroups: [
      {
        id: 'ox-oxfordshire',
        name: 'Oxfordshire',
        cities: [
          {
            id: 'oxford-city',
            name: 'Oxford',
            hospitals: [
              { id: 'jr', name: 'John Radcliffe Hospital', town: 'Oxford', lat: 51.764, lng: -1.218, trust: 'Oxford University Hospitals NHS Foundation Trust' },
              { id: 'churchill', name: 'Churchill Hospital', town: 'Oxford', lat: 51.75, lng: -1.216, trust: 'Oxford University Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'banbury',
            name: 'Banbury',
            hospitals: [
              { id: 'horton', name: 'Horton General Hospital', town: 'Banbury', lat: 52.055, lng: -1.336, trust: 'Oxford University Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'ox-bucks',
        name: 'Buckinghamshire & Milton Keynes',
        cities: [
          {
            id: 'milton-keynes',
            name: 'Milton Keynes',
            hospitals: [
              { id: 'mkuh', name: 'Milton Keynes University Hospital', town: 'Milton Keynes', lat: 52.026, lng: -0.738, trust: 'Milton Keynes University Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'aylesbury',
            name: 'Aylesbury',
            hospitals: [
              { id: 'stoke-mandeville', name: 'Stoke Mandeville Hospital', town: 'Aylesbury', lat: 51.799, lng: -0.801, trust: 'Buckinghamshire Healthcare NHS Trust' },
            ],
          },
          {
            id: 'high-wycombe',
            name: 'High Wycombe / Amersham',
            hospitals: [
              { id: 'wycombe', name: 'Wycombe Hospital', town: 'High Wycombe', lat: 51.626, lng: -0.755, trust: 'Buckinghamshire Healthcare NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'ox-berks',
        name: 'Berkshire',
        cities: [
          {
            id: 'reading',
            name: 'Reading / Berkshire',
            hospitals: [
              { id: 'royal-berks', name: 'Royal Berkshire Hospital', town: 'Reading', lat: 51.451, lng: -0.959, trust: 'Royal Berkshire NHS Foundation Trust' },
            ],
          },
          {
            id: 'slough',
            name: 'Slough',
            hospitals: [
              { id: 'wexham', name: 'Wexham Park Hospital', town: 'Slough', lat: 51.532, lng: -0.575, trust: 'Frimley Health NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'peninsula',
    name: 'Peninsula',
    shortName: 'Peninsula',
    color: '#1A5276',
    center: [50.7, -3.8],
    polygon: [
      [-5.7, 50.5],
      [-3.8, 51.25],
      [-3, 51],
      [-3.2, 50.2],
      [-4.2, 50.1],
      [-5.7, 49.95],
      [-5.7, 50.5],
    ],
    medicalSchools: ['Plymouth University', 'University of Exeter'],
    sourceUrl: `${BASE}/peninsula-foundation-school/`,
    includes: ['Exeter', 'Penzance', 'Plymouth', 'South Devon', 'Torbay', 'Truro'],
    subgroups: [
      {
        id: 'pen-devon',
        name: 'Devon',
        cities: [
          {
            id: 'exeter',
            name: 'Exeter',
            hospitals: [
              { id: 'rd-e', name: 'Royal Devon and Exeter Hospital', town: 'Exeter', lat: 50.715, lng: -3.506, trust: 'Royal Devon University Healthcare NHS Foundation Trust' },
            ],
          },
          {
            id: 'plymouth',
            name: 'Plymouth',
            hospitals: [
              { id: 'derriford', name: 'University Hospitals Plymouth (Derriford)', town: 'Plymouth', lat: 50.417, lng: -4.114, trust: 'University Hospitals Plymouth NHS Trust' },
            ],
          },
          {
            id: 'torbay',
            name: 'Torbay / South Devon',
            hospitals: [
              { id: 'torbay-h', name: 'Torbay Hospital', town: 'Torbay', lat: 50.482, lng: -3.55, trust: 'Torbay and South Devon NHS Foundation Trust' },
            ],
          },
          {
            id: 'barnstaple',
            name: 'Barnstaple',
            hospitals: [
              { id: 'nddh', name: 'North Devon District Hospital', town: 'Barnstaple', lat: 51.078, lng: -4.041, trust: 'Royal Devon University Healthcare NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'pen-cornwall',
        name: 'Cornwall',
        cities: [
          {
            id: 'truro',
            name: 'Truro',
            hospitals: [
              { id: 'rch', name: 'Royal Cornwall Hospital', town: 'Truro', lat: 50.266, lng: -5.092, trust: 'Royal Cornwall Hospitals NHS Trust' },
            ],
          },
          {
            id: 'penzance',
            name: 'Penzance / Hayle',
            hospitals: [
              { id: 'west-cornwall', name: 'West Cornwall Hospital', town: 'Penzance', lat: 50.125, lng: -5.537, trust: 'Royal Cornwall Hospitals NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'scotland',
    name: 'Scotland',
    shortName: 'Scotland',
    color: '#154360',
    center: [56.5, -4],
    polygon: [
      [-7.5, 58.6],
      [-1.8, 58.7],
      [-1.5, 55.9],
      [-3, 54.7],
      [-5, 55],
      [-6.5, 56.5],
      [-7.5, 58.6],
    ],
    medicalSchools: ['University of Dundee', 'University of Aberdeen', 'The University of Edinburgh', 'University of Glasgow'],
    sourceUrl: `${BASE}/scotland-foundation-school/`,
    includes: ['Dundee', 'Perth', 'Aberdeen', 'Inverness', 'Edinburgh', 'Dumfries', 'Glasgow'],
    subgroups: [
      {
        id: 'scotland-east',
        name: 'East region',
        description: 'Angus, Dundee, Perth',
        cities: [
          {
            id: 'dundee',
            name: 'Dundee',
            hospitals: [
              { id: 'ninewells', name: 'Ninewells Hospital', town: 'Dundee', lat: 56.464, lng: -3.039, trust: 'NHS Tayside' },
            ],
          },
          {
            id: 'perth',
            name: 'Perth',
            hospitals: [
              { id: 'perth-royal', name: 'Perth Royal Infirmary', town: 'Perth', lat: 56.399, lng: -3.463, trust: 'NHS Tayside' },
            ],
          },
        ],
      },
      {
        id: 'scotland-north',
        name: 'North region',
        description: 'Aberdeen, Elgin, Fort William, Inverness, Lerwick, Oban, Stornoway, Wick',
        cities: [
          {
            id: 'aberdeen',
            name: 'Aberdeen',
            hospitals: [
              { id: 'ari', name: 'Aberdeen Royal Infirmary', town: 'Aberdeen', lat: 57.155, lng: -2.136, trust: 'NHS Grampian' },
            ],
          },
          {
            id: 'inverness',
            name: 'Inverness',
            hospitals: [
              { id: 'raigmore', name: 'Raigmore Hospital', town: 'Inverness', lat: 57.467, lng: -4.196, trust: 'NHS Highland' },
            ],
          },
          {
            id: 'elgin',
            name: 'Elgin',
            hospitals: [
              { id: 'dr-grays', name: 'Dr Gray\'s Hospital', town: 'Elgin', lat: 57.648, lng: -3.324, trust: 'NHS Grampian' },
            ],
          },
          {
            id: 'stornoway',
            name: 'Stornoway',
            hospitals: [
              { id: 'western-isles', name: 'Western Isles Hospital', town: 'Stornoway', lat: 58.214, lng: -6.381, trust: 'NHS Western Isles' },
            ],
          },
          {
            id: 'lerwick',
            name: 'Lerwick',
            hospitals: [
              { id: 'gilbert-bain', name: 'Gilbert Bain Hospital', town: 'Lerwick', lat: 60.153, lng: -1.155, trust: 'NHS Shetland' },
            ],
          },
        ],
      },
      {
        id: 'scotland-se',
        name: 'Southeast region',
        description: 'Bonnyrigg, Dunfermline, Edinburgh, Fife, Haddington, Howden, Kirkcaldy, Roxburghshire',
        cities: [
          {
            id: 'edinburgh',
            name: 'Edinburgh',
            hospitals: [
              { id: 'rie', name: 'Royal Infirmary of Edinburgh', town: 'Edinburgh', lat: 55.922, lng: -3.137, trust: 'NHS Lothian' },
              { id: 'wgh', name: 'Western General Hospital', town: 'Edinburgh', lat: 55.962, lng: -3.235, trust: 'NHS Lothian' },
            ],
          },
          {
            id: 'kirkcaldy',
            name: 'Kirkcaldy',
            hospitals: [
              { id: 'victoria-kirkcaldy', name: 'Victoria Hospital', town: 'Kirkcaldy', lat: 56.126, lng: -3.15, trust: 'NHS Fife' },
            ],
          },
          {
            id: 'melrose',
            name: 'Melrose',
            hospitals: [
              { id: 'borders', name: 'Borders General Hospital', town: 'Melrose', lat: 55.605, lng: -2.743, trust: 'NHS Borders' },
            ],
          },
        ],
      },
      {
        id: 'scotland-west',
        name: 'West region',
        description: 'Airdrie, Alexandria, Ayr, Dumfries, East Kilbride, Glasgow, Greenock, Kilmarnock, Larbert, Paisley, Wishaw',
        cities: [
          {
            id: 'glasgow',
            name: 'Glasgow',
            hospitals: [
              { id: 'qeu-glasgow', name: 'Queen Elizabeth University Hospital', town: 'Glasgow', lat: 55.862, lng: -4.342, trust: 'NHS Greater Glasgow and Clyde' },
              { id: 'gri', name: 'Glasgow Royal Infirmary', town: 'Glasgow', lat: 55.866, lng: -4.234, trust: 'NHS Greater Glasgow and Clyde' },
            ],
          },
          {
            id: 'east-kilbride',
            name: 'East Kilbride',
            hospitals: [
              { id: 'hairmyres', name: 'University Hospital Hairmyres', town: 'East Kilbride', lat: 55.76, lng: -4.225, trust: 'NHS Lanarkshire' },
            ],
          },
          {
            id: 'wishaw',
            name: 'Wishaw',
            hospitals: [
              { id: 'wishaw', name: 'University Hospital Wishaw', town: 'Wishaw', lat: 55.777, lng: -3.912, trust: 'NHS Lanarkshire' },
            ],
          },
          {
            id: 'kilmarnock',
            name: 'Kilmarnock',
            hospitals: [
              { id: 'crosshouse', name: 'University Hospital Crosshouse', town: 'Kilmarnock', lat: 55.62, lng: -4.536, trust: 'NHS Ayrshire and Arran' },
            ],
          },
          {
            id: 'ayr',
            name: 'Ayr',
            hospitals: [
              { id: 'ayr', name: 'University Hospital Ayr', town: 'Ayr', lat: 55.448, lng: -4.615, trust: 'NHS Ayrshire and Arran' },
            ],
          },
          {
            id: 'dumfries',
            name: 'Dumfries',
            hospitals: [
              { id: 'dumfries', name: 'Dumfries and Galloway Royal Infirmary', town: 'Dumfries', lat: 55.05, lng: -3.62, trust: 'NHS Dumfries and Galloway' },
            ],
          },
          {
            id: 'larbert',
            name: 'Larbert',
            hospitals: [
              { id: 'forth-valley', name: 'Forth Valley Royal Hospital', town: 'Larbert', lat: 56.026, lng: -3.847, trust: 'NHS Forth Valley' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'severn',
    name: 'Severn',
    shortName: 'Severn',
    color: '#196F3D',
    center: [51.4, -2.5],
    polygon: [
      [-3.2, 52],
      [-1.7, 51.8],
      [-1.7, 51],
      [-2.5, 50.9],
      [-3.3, 50.95],
      [-3.2, 52],
    ],
    medicalSchools: ['University of Bristol'],
    sourceUrl: `${BASE}/severn-foundation-school/`,
    includes: ['Bath', 'Bristol', 'Cheltenham', 'Gloucester', 'Weston-Super-Mare', 'Yeovil'],
    subgroups: [
      {
        id: 'sev-bristol-bath',
        name: 'Bristol & Bath',
        cities: [
          {
            id: 'bristol',
            name: 'Bristol',
            hospitals: [
              { id: 'bri', name: 'Bristol Royal Infirmary', town: 'Bristol', lat: 51.459, lng: -2.596, trust: 'University Hospitals Bristol and Weston NHS Foundation Trust' },
              { id: 'southmead', name: 'Southmead Hospital', town: 'Bristol', lat: 51.497, lng: -2.592, trust: 'North Bristol NHS Trust' },
            ],
          },
          {
            id: 'bath',
            name: 'Bath',
            hospitals: [
              { id: 'ruh', name: 'Royal United Hospital', town: 'Bath', lat: 51.392, lng: -2.39, trust: 'Royal United Hospitals Bath NHS Foundation Trust' },
            ],
          },
          {
            id: 'weston',
            name: 'Weston-Super-Mare',
            hospitals: [
              { id: 'weston-h', name: 'Weston General Hospital', town: 'Weston-super-Mare', lat: 51.325, lng: -2.942, trust: 'University Hospitals Bristol and Weston NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'sev-glos',
        name: 'Gloucestershire',
        cities: [
          {
            id: 'gloucester',
            name: 'Gloucester',
            hospitals: [
              { id: 'grh', name: 'Gloucestershire Royal Hospital', town: 'Gloucester', lat: 51.866, lng: -2.231, trust: 'Gloucestershire Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'cheltenham',
            name: 'Cheltenham',
            hospitals: [
              { id: 'cheltenham-h', name: 'Cheltenham General Hospital', town: 'Cheltenham', lat: 51.894, lng: -2.077, trust: 'Gloucestershire Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'sev-somerset',
        name: 'Somerset & Swindon',
        cities: [
          {
            id: 'taunton',
            name: 'Taunton',
            hospitals: [
              { id: 'musgrove', name: 'Musgrove Park Hospital', town: 'Taunton', lat: 51.011, lng: -3.12, trust: 'Somerset NHS Foundation Trust' },
            ],
          },
          {
            id: 'yeovil',
            name: 'Yeovil',
            hospitals: [
              { id: 'yeovil-h', name: 'Yeovil District Hospital', town: 'Yeovil', lat: 50.944, lng: -2.626, trust: 'Somerset NHS Foundation Trust' },
            ],
          },
          {
            id: 'swindon',
            name: 'Swindon',
            hospitals: [
              { id: 'gwh', name: 'Great Western Hospital', town: 'Swindon', lat: 51.548, lng: -1.727, trust: 'Great Western Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'trent',
    name: 'Trent',
    shortName: 'Trent',
    color: '#1E8449',
    center: [53, -1],
    polygon: [
      [-1.8, 53.5],
      [-0.2, 53.45],
      [0.2, 52.9],
      [-0.5, 52.7],
      [-1.7, 52.75],
      [-1.9, 53.1],
      [-1.8, 53.5],
    ],
    medicalSchools: ['University of Nottingham', 'Lincoln Medical School'],
    sourceUrl: `${BASE}/trent-foundation-school/`,
    includes: ['Boston', 'Chesterfield', 'Derby', 'Lincoln', 'Nottingham', 'Burton'],
    subgroups: [
      {
        id: 'trent-notts',
        name: 'Nottinghamshire',
        cities: [
          {
            id: 'nottingham',
            name: 'Nottingham',
            hospitals: [
              { id: 'qmc', name: 'Queen\'s Medical Centre', town: 'Nottingham', lat: 52.943, lng: -1.186, trust: 'Nottingham University Hospitals NHS Trust' },
              { id: 'nch', name: 'Nottingham City Hospital', town: 'Nottingham', lat: 52.991, lng: -1.16, trust: 'Nottingham University Hospitals NHS Trust' },
            ],
          },
          {
            id: 'mansfield',
            name: 'Mansfield',
            hospitals: [
              { id: 'kings-mill', name: 'King\'s Mill Hospital', town: 'Mansfield', lat: 53.146, lng: -1.223, trust: 'Sherwood Forest Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'trent-derby',
        name: 'Derbyshire',
        cities: [
          {
            id: 'derby',
            name: 'Derby',
            hospitals: [
              { id: 'rdh', name: 'Royal Derby Hospital', town: 'Derby', lat: 52.911, lng: -1.513, trust: 'University Hospitals of Derby and Burton NHS Foundation Trust' },
            ],
          },
          {
            id: 'chesterfield',
            name: 'Chesterfield',
            hospitals: [
              { id: 'chesterfield-h', name: 'Chesterfield Royal Hospital', town: 'Chesterfield', lat: 53.236, lng: -1.405, trust: 'Chesterfield Royal Hospital NHS Foundation Trust' },
            ],
          },
          {
            id: 'burton',
            name: 'Burton',
            hospitals: [
              { id: 'burton-h', name: 'Queen\'s Hospital Burton', town: 'Burton upon Trent', lat: 52.811, lng: -1.63, trust: 'University Hospitals of Derby and Burton NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'trent-lincs',
        name: 'Lincolnshire',
        cities: [
          {
            id: 'lincoln',
            name: 'Lincoln',
            hospitals: [
              { id: 'lincoln-h', name: 'Lincoln County Hospital', town: 'Lincoln', lat: 53.234, lng: -0.53, trust: 'United Lincolnshire Hospitals NHS Trust' },
            ],
          },
          {
            id: 'boston',
            name: 'Boston',
            hospitals: [
              { id: 'pilgrim', name: 'Pilgrim Hospital', town: 'Boston', lat: 52.978, lng: -0.006, trust: 'United Lincolnshire Hospitals NHS Trust' },
            ],
          },
          {
            id: 'grantham',
            name: 'Grantham',
            hospitals: [
              { id: 'grantham-h', name: 'Grantham and District Hospital', town: 'Grantham', lat: 52.913, lng: -0.652, trust: 'United Lincolnshire Hospitals NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wales',
    name: 'Wales',
    shortName: 'Wales',
    color: '#922B21',
    center: [52.3, -3.5],
    polygon: [
      [-5.3, 53.4],
      [-2.7, 53.4],
      [-2.7, 51.4],
      [-4, 51.3],
      [-5.3, 51.7],
      [-5.3, 53.4],
    ],
    medicalSchools: ['Cardiff University', 'University of Swansea'],
    sourceUrl: `${BASE}/wales-foundation-school/`,
    includes: ['Aberystwyth', 'Bangor', 'Cardiff', 'Newport', 'Port Talbot', 'Swansea', 'Wrexham'],
    subgroups: [
      {
        id: 'wales-south',
        name: 'South Wales',
        cities: [
          {
            id: 'cardiff',
            name: 'Cardiff',
            hospitals: [
              { id: 'uhw', name: 'University Hospital of Wales', town: 'Cardiff', lat: 51.507, lng: -3.19, trust: 'Cardiff and Vale University Health Board' },
            ],
          },
          {
            id: 'llandough',
            name: 'Llandough (near Penarth)',
            hospitals: [
              { id: 'llandough-h', name: 'University Hospital Llandough', town: 'Llandough', lat: 51.448, lng: -3.2, trust: 'Cardiff and Vale University Health Board' },
            ],
          },
          {
            id: 'swansea',
            name: 'Swansea',
            hospitals: [
              { id: 'morriston', name: 'Morriston Hospital', town: 'Swansea', lat: 51.685, lng: -3.934, trust: 'Swansea Bay University Health Board' },
              { id: 'singleton', name: 'Singleton Hospital', town: 'Swansea', lat: 51.608, lng: -3.983, trust: 'Swansea Bay University Health Board' },
            ],
          },
          {
            id: 'newport',
            name: 'Newport',
            hospitals: [
              { id: 'royal-gwent', name: 'Royal Gwent Hospital', town: 'Newport', lat: 51.586, lng: -2.994, trust: 'Aneurin Bevan University Health Board' },
            ],
          },
          {
            id: 'cwmbran',
            name: 'Cwmbran',
            hospitals: [
              { id: 'grange', name: 'Grange University Hospital', town: 'Cwmbran', lat: 51.649, lng: -3.01, trust: 'Aneurin Bevan University Health Board' },
            ],
          },
          {
            id: 'bridgend',
            name: 'Bridgend',
            hospitals: [
              { id: 'pow', name: 'Princess of Wales Hospital', town: 'Bridgend', lat: 51.52, lng: -3.568, trust: 'Cwm Taf Morgannwg University Health Board' },
            ],
          },
          {
            id: 'merthyr',
            name: 'Merthyr Tydfil',
            hospitals: [
              { id: 'prince-charles', name: 'Prince Charles Hospital', town: 'Merthyr Tydfil', lat: 51.759, lng: -3.378, trust: 'Cwm Taf Morgannwg University Health Board' },
            ],
          },
          {
            id: 'ynysmaerdy',
            name: 'Ynysmaerdy (near Pontyclun)',
            hospitals: [
              { id: 'royal-glamorgan', name: 'Royal Glamorgan Hospital', town: 'Ynysmaerdy', lat: 51.547, lng: -3.39, trust: 'Cwm Taf Morgannwg University Health Board' },
            ],
          },
        ],
      },
      {
        id: 'wales-midwest',
        name: 'Mid & West Wales',
        cities: [
          {
            id: 'carmarthen',
            name: 'Carmarthen',
            hospitals: [
              { id: 'glangwili', name: 'Glangwili General Hospital', town: 'Carmarthen', lat: 51.857, lng: -4.284, trust: 'Hywel Dda University Health Board' },
            ],
          },
          {
            id: 'haverfordwest',
            name: 'Haverfordwest',
            hospitals: [
              { id: 'withybush', name: 'Withybush General Hospital', town: 'Haverfordwest', lat: 51.812, lng: -4.97, trust: 'Hywel Dda University Health Board' },
            ],
          },
          {
            id: 'aberystwyth',
            name: 'Aberystwyth',
            hospitals: [
              { id: 'bronglais', name: 'Bronglais General Hospital', town: 'Aberystwyth', lat: 52.416, lng: -4.071, trust: 'Hywel Dda University Health Board' },
            ],
          },
          {
            id: 'llanelli',
            name: 'Llanelli',
            hospitals: [
              { id: 'prince-philip', name: 'Prince Philip Hospital', town: 'Llanelli', lat: 51.69, lng: -4.147, trust: 'Hywel Dda University Health Board' },
            ],
          },
          {
            id: 'bangor',
            name: 'Bangor',
            hospitals: [
              { id: 'ysbyty-gwynedd', name: 'Ysbyty Gwynedd', town: 'Bangor', lat: 53.208, lng: -4.163, trust: 'Betsi Cadwaladr University Health Board' },
            ],
          },
        ],
      },
      {
        id: 'wales-north',
        name: 'North Wales',
        cities: [
          {
            id: 'wrexham',
            name: 'Wrexham',
            hospitals: [
              { id: 'wrexham-maelor', name: 'Wrexham Maelor Hospital', town: 'Wrexham', lat: 53.05, lng: -3.01, trust: 'Betsi Cadwaladr University Health Board' },
            ],
          },
          {
            id: 'bodelwyddan',
            name: 'Bodelwyddan (near Rhyl)',
            hospitals: [
              { id: 'glan-clwyd', name: 'Glan Clwyd Hospital', town: 'Bodelwyddan', lat: 53.269, lng: -3.498, trust: 'Betsi Cadwaladr University Health Board' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wessex',
    name: 'Wessex',
    shortName: 'Wessex',
    color: '#148F77',
    center: [51, -1.4],
    polygon: [
      [-2.5, 51.4],
      [-0.7, 51.4],
      [-0.7, 50.6],
      [-1.5, 50.5],
      [-2.5, 50.5],
      [-2.5, 51.4],
    ],
    medicalSchools: ['University of Southampton'],
    sourceUrl: `${BASE}/wessex-foundation-school/`,
    includes: ['Basingstoke', 'Bournemouth', 'Southampton', 'Portsmouth', 'Winchester'],
    subgroups: [
      {
        id: 'wessex-hants',
        name: 'Hampshire',
        cities: [
          {
            id: 'southampton',
            name: 'Southampton',
            hospitals: [
              { id: 'suht', name: 'Southampton General Hospital', town: 'Southampton', lat: 50.933, lng: -1.434, trust: 'University Hospital Southampton NHS Foundation Trust' },
            ],
          },
          {
            id: 'portsmouth',
            name: 'Portsmouth',
            hospitals: [
              { id: 'qa', name: 'Queen Alexandra Hospital', town: 'Portsmouth', lat: 50.85, lng: -1.098, trust: 'Portsmouth Hospitals University NHS Trust' },
            ],
          },
          {
            id: 'winchester',
            name: 'Winchester',
            hospitals: [
              { id: 'rhch', name: 'Royal Hampshire County Hospital', town: 'Winchester', lat: 51.062, lng: -1.32, trust: 'Hampshire Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'basingstoke',
            name: 'Basingstoke',
            hospitals: [
              { id: 'basingstoke-h', name: 'Basingstoke and North Hampshire Hospital', town: 'Basingstoke', lat: 51.281, lng: -1.116, trust: 'Hampshire Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'wessex-dorset',
        name: 'Dorset',
        cities: [
          {
            id: 'bournemouth',
            name: 'Bournemouth',
            hospitals: [
              { id: 'rbh', name: 'Royal Bournemouth Hospital', town: 'Bournemouth', lat: 50.744, lng: -1.819, trust: 'University Hospitals Dorset NHS Foundation Trust' },
            ],
          },
          {
            id: 'poole',
            name: 'Poole',
            hospitals: [
              { id: 'poole-h', name: 'Poole Hospital', town: 'Poole', lat: 50.721, lng: -1.973, trust: 'University Hospitals Dorset NHS Foundation Trust' },
            ],
          },
          {
            id: 'dorchester',
            name: 'Dorchester',
            hospitals: [
              { id: 'dorchester-h', name: 'Dorset County Hospital', town: 'Dorchester', lat: 50.713, lng: -2.445, trust: 'Dorset County Hospital NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'wessex-other',
        name: 'Wiltshire & Isle of Wight',
        cities: [
          {
            id: 'salisbury',
            name: 'Salisbury',
            hospitals: [
              { id: 'salisbury-h', name: 'Salisbury District Hospital', town: 'Salisbury', lat: 51.046, lng: -1.783, trust: 'Salisbury NHS Foundation Trust' },
            ],
          },
          {
            id: 'isle-of-wight',
            name: 'Isle of Wight',
            hospitals: [
              { id: 'st-marys-iow', name: 'St Mary\'s Hospital', town: 'Isle of Wight', lat: 50.711, lng: -1.3, trust: 'Isle of Wight NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wm-central',
    name: 'West Midlands Central',
    shortName: 'WM Central',
    color: '#6C3483',
    center: [52.48, -1.9],
    polygon: [
      [-2.15, 52.62],
      [-1.7, 52.62],
      [-1.7, 52.35],
      [-2.15, 52.35],
      [-2.15, 52.62],
    ],
    medicalSchools: ['University of Birmingham', 'Aston University'],
    sourceUrl: `${BASE}/west-midlands-central-foundation-school/`,
    includes: ['Birmingham', 'Edgbaston', 'Solihull', 'Sutton Coldfield', 'West Bromwich'],
    subgroups: [
      {
        id: 'wmc-bham',
        name: 'Birmingham & Solihull',
        cities: [
          {
            id: 'birmingham',
            name: 'Birmingham / Edgbaston',
            hospitals: [
              { id: 'qehb', name: 'Queen Elizabeth Hospital Birmingham', town: 'Edgbaston', lat: 52.452, lng: -1.938, trust: 'University Hospitals Birmingham NHS Foundation Trust' },
              { id: 'heartlands', name: 'Birmingham Heartlands Hospital', town: 'Birmingham', lat: 52.479, lng: -1.826, trust: 'University Hospitals Birmingham NHS Foundation Trust' },
              { id: 'bch', name: 'Birmingham Children\'s Hospital', town: 'Birmingham', lat: 52.485, lng: -1.894, trust: 'Birmingham Women\'s and Children\'s NHS Foundation Trust' },
            ],
          },
          {
            id: 'sutton-coldfield',
            name: 'Sutton Coldfield',
            hospitals: [
              { id: 'good-hope', name: 'Good Hope Hospital', town: 'Sutton Coldfield', lat: 52.57, lng: -1.8, trust: 'University Hospitals Birmingham NHS Foundation Trust' },
            ],
          },
          {
            id: 'solihull',
            name: 'Solihull',
            hospitals: [
              { id: 'solihull-h', name: 'Solihull Hospital', town: 'Solihull', lat: 52.414, lng: -1.775, trust: 'University Hospitals Birmingham NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'wmc-sandwell',
        name: 'Sandwell',
        cities: [
          {
            id: 'west-bromwich',
            name: 'West Bromwich',
            hospitals: [
              { id: 'sandwell', name: 'Sandwell General Hospital', town: 'West Bromwich', lat: 52.53, lng: -1.983, trust: 'Sandwell and West Birmingham Hospitals NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wm-north',
    name: 'West Midlands North',
    shortName: 'WM North',
    color: '#5B2C6F',
    center: [52.7, -2.3],
    polygon: [
      [-3, 53.05],
      [-1.85, 53],
      [-1.85, 52.45],
      [-2.9, 52.5],
      [-3, 53.05],
    ],
    medicalSchools: ['Keele University'],
    sourceUrl: `${BASE}/west-midlands-north-foundation-school/`,
    includes: ['Dudley', 'Shrewsbury', 'Stoke', 'Telford', 'Walsall', 'Wolverhampton'],
    subgroups: [
      {
        id: 'wmn-bc',
        name: 'Black Country',
        cities: [
          {
            id: 'wolverhampton',
            name: 'Wolverhampton',
            hospitals: [
              { id: 'new-cross', name: 'New Cross Hospital', town: 'Wolverhampton', lat: 52.599, lng: -2.096, trust: 'The Royal Wolverhampton NHS Trust' },
            ],
          },
          {
            id: 'dudley',
            name: 'Dudley',
            hospitals: [
              { id: 'russells-hall', name: 'Russells Hall Hospital', town: 'Dudley', lat: 52.505, lng: -2.12, trust: 'The Dudley Group NHS Foundation Trust' },
            ],
          },
          {
            id: 'walsall',
            name: 'Walsall',
            hospitals: [
              { id: 'walsall-h', name: 'Walsall Manor Hospital', town: 'Walsall', lat: 52.585, lng: -1.997, trust: 'Walsall Healthcare NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'wmn-stoke',
        name: 'Staffordshire',
        cities: [
          {
            id: 'stoke',
            name: 'Stoke',
            hospitals: [
              { id: 'uhnm', name: 'Royal Stoke University Hospital', town: 'Stoke-on-Trent', lat: 53.004, lng: -2.211, trust: 'University Hospitals of North Midlands NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'wmn-shrops',
        name: 'Shropshire',
        cities: [
          {
            id: 'shrewsbury',
            name: 'Shrewsbury',
            hospitals: [
              { id: 'rsh', name: 'Royal Shrewsbury Hospital', town: 'Shrewsbury', lat: 52.712, lng: -2.793, trust: 'The Shrewsbury and Telford Hospital NHS Trust' },
            ],
          },
          {
            id: 'telford',
            name: 'Telford',
            hospitals: [
              { id: 'prh-telford', name: 'Princess Royal Hospital', town: 'Telford', lat: 52.71, lng: -2.486, trust: 'The Shrewsbury and Telford Hospital NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'wm-south',
    name: 'West Midlands South',
    shortName: 'WM South',
    color: '#7D3C98',
    center: [52.25, -1.9],
    polygon: [
      [-2.9, 52.55],
      [-1.3, 52.55],
      [-1.3, 51.95],
      [-2.9, 51.95],
      [-2.9, 52.55],
    ],
    medicalSchools: ['University of Warwick'],
    sourceUrl: `${BASE}/west-midlands-south-foundation-school/`,
    includes: ['Coventry', 'Hereford', 'Nuneaton', 'Stratford-upon-Avon', 'Warwick', 'Worcester'],
    subgroups: [
      {
        id: 'wms-cov',
        name: 'Coventry & Warwickshire',
        cities: [
          {
            id: 'coventry',
            name: 'Coventry',
            hospitals: [
              { id: 'uhcw', name: 'University Hospital Coventry', town: 'Coventry', lat: 52.421, lng: -1.44, trust: 'University Hospitals Coventry and Warwickshire NHS Trust' },
            ],
          },
          {
            id: 'warwick',
            name: 'Warwick',
            hospitals: [
              { id: 'warwick-h', name: 'Warwick Hospital', town: 'Warwick', lat: 52.287, lng: -1.582, trust: 'South Warwickshire University NHS Foundation Trust' },
            ],
          },
          {
            id: 'nuneaton',
            name: 'Nuneaton',
            hospitals: [
              { id: 'geh', name: 'George Eliot Hospital', town: 'Nuneaton', lat: 52.51, lng: -1.475, trust: 'George Eliot Hospital NHS Trust' },
            ],
          },
        ],
      },
      {
        id: 'wms-worcs',
        name: 'Worcestershire & Herefordshire',
        cities: [
          {
            id: 'worcester',
            name: 'Worcester',
            hospitals: [
              { id: 'wrh', name: 'Worcestershire Royal Hospital', town: 'Worcester', lat: 52.19, lng: -2.18, trust: 'Worcestershire Acute Hospitals NHS Trust' },
            ],
          },
          {
            id: 'redditch',
            name: 'Redditch',
            hospitals: [
              { id: 'alexandra', name: 'Alexandra Hospital', town: 'Redditch', lat: 52.29, lng: -1.94, trust: 'Worcestershire Acute Hospitals NHS Trust' },
            ],
          },
          {
            id: 'hereford',
            name: 'Hereford',
            hospitals: [
              { id: 'hereford-h', name: 'Hereford County Hospital', town: 'Hereford', lat: 52.052, lng: -2.735, trust: 'Wye Valley NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'yorkshire',
    name: 'Yorkshire and Humber',
    shortName: 'Yorkshire & Humber',
    color: '#A93226',
    center: [53.8, -1.3],
    polygon: [
      [-2.3, 54.6],
      [-0.3, 54.5],
      [0.2, 53.7],
      [-0.3, 53.3],
      [-1.5, 53.2],
      [-2.3, 53.5],
      [-2.3, 54.6],
    ],
    medicalSchools: ['Hull and York Medical School', 'The University of Sheffield', 'University of Leeds'],
    sourceUrl: `${BASE}/yorkshire-and-humber-foundation-school/`,
    includes: ['Hull', 'Scarborough', 'Scunthorpe', 'York', 'Doncaster', 'Sheffield', 'Huddersfield', 'Leeds'],
    subgroups: [
      {
        id: 'yh-nyc',
        name: 'North Yorkshire and East Coast',
        description: 'Bridlington, Grimsby, Hull, Scarborough, Scunthorpe, York',
        cities: [
          {
            id: 'hull',
            name: 'Hull',
            hospitals: [
              { id: 'hri', name: 'Hull Royal Infirmary', town: 'Hull', lat: 53.744, lng: -0.357, trust: 'Hull University Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'cottingham',
            name: 'Cottingham',
            hospitals: [
              { id: 'castle-hill', name: 'Castle Hill Hospital', town: 'Cottingham', lat: 53.779, lng: -0.447, trust: 'Hull University Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'york',
            name: 'York',
            hospitals: [
              { id: 'york', name: 'York Hospital', town: 'York', lat: 53.97, lng: -1.083, trust: 'York and Scarborough Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'scarborough',
            name: 'Scarborough',
            hospitals: [
              { id: 'scarborough', name: 'Scarborough General Hospital', town: 'Scarborough', lat: 54.281, lng: -0.431, trust: 'York and Scarborough Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'scunthorpe',
            name: 'Scunthorpe',
            hospitals: [
              { id: 'scunthorpe', name: 'Scunthorpe General Hospital', town: 'Scunthorpe', lat: 53.587, lng: -0.67, trust: 'Northern Lincolnshire and Goole NHS Foundation Trust' },
            ],
          },
          {
            id: 'grimsby',
            name: 'Grimsby',
            hospitals: [
              { id: 'grimsby', name: 'Diana, Princess of Wales Hospital', town: 'Grimsby', lat: 53.555, lng: -0.1, trust: 'Northern Lincolnshire and Goole NHS Foundation Trust' },
            ],
          },
          {
            id: 'bridlington',
            name: 'Bridlington',
            hospitals: [
              { id: 'bridlington', name: 'Bridlington Hospital', town: 'Bridlington', lat: 54.094, lng: -0.204, trust: 'York and Scarborough Teaching Hospitals NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'yh-south',
        name: 'South Yorkshire',
        description: 'Barnsley, Doncaster, Rotherham, Sheffield',
        cities: [
          {
            id: 'sheffield',
            name: 'Sheffield',
            hospitals: [
              { id: 'ngh-sheffield', name: 'Northern General Hospital', town: 'Sheffield', lat: 53.41, lng: -1.458, trust: 'Sheffield Teaching Hospitals NHS Foundation Trust' },
              { id: 'hallamshire', name: 'Royal Hallamshire Hospital', town: 'Sheffield', lat: 53.378, lng: -1.493, trust: 'Sheffield Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'doncaster',
            name: 'Doncaster',
            hospitals: [
              { id: 'doncaster', name: 'Doncaster Royal Infirmary', town: 'Doncaster', lat: 53.531, lng: -1.108, trust: 'Doncaster and Bassetlaw Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'rotherham',
            name: 'Rotherham',
            hospitals: [
              { id: 'rotherham', name: 'Rotherham Hospital', town: 'Rotherham', lat: 53.431, lng: -1.342, trust: 'The Rotherham NHS Foundation Trust' },
            ],
          },
          {
            id: 'barnsley',
            name: 'Barnsley',
            hospitals: [
              { id: 'barnsley', name: 'Barnsley Hospital', town: 'Barnsley', lat: 53.558, lng: -1.499, trust: 'Barnsley Hospital NHS Foundation Trust' },
            ],
          },
        ],
      },
      {
        id: 'yh-west',
        name: 'West Yorkshire',
        description: 'Airedale, Bradford, Dewsbury, Halifax, Harrogate, Huddersfield, Leeds, Pontefract, Wakefield',
        cities: [
          {
            id: 'leeds',
            name: 'Leeds',
            hospitals: [
              { id: 'lgi', name: 'Leeds General Infirmary', town: 'Leeds', lat: 53.802, lng: -1.552, trust: 'Leeds Teaching Hospitals NHS Trust' },
              { id: 'st-james', name: 'St James\'s University Hospital', town: 'Leeds', lat: 53.806, lng: -1.519, trust: 'Leeds Teaching Hospitals NHS Trust' },
            ],
          },
          {
            id: 'bradford',
            name: 'Bradford',
            hospitals: [
              { id: 'bri-bradford', name: 'Bradford Royal Infirmary', town: 'Bradford', lat: 53.806, lng: -1.794, trust: 'Bradford Teaching Hospitals NHS Foundation Trust' },
            ],
          },
          {
            id: 'huddersfield',
            name: 'Huddersfield',
            hospitals: [
              { id: 'hri-huddersfield', name: 'Huddersfield Royal Infirmary', town: 'Huddersfield', lat: 53.655, lng: -1.817, trust: 'Calderdale and Huddersfield NHS Foundation Trust' },
            ],
          },
          {
            id: 'halifax',
            name: 'Halifax',
            hospitals: [
              { id: 'calderdale', name: 'Calderdale Royal Hospital', town: 'Halifax', lat: 53.705, lng: -1.857, trust: 'Calderdale and Huddersfield NHS Foundation Trust' },
            ],
          },
          {
            id: 'wakefield',
            name: 'Wakefield',
            hospitals: [
              { id: 'pinderfields', name: 'Pinderfields Hospital', town: 'Wakefield', lat: 53.696, lng: -1.488, trust: 'Mid Yorkshire Teaching NHS Trust' },
            ],
          },
          {
            id: 'harrogate',
            name: 'Harrogate',
            hospitals: [
              { id: 'harrogate', name: 'Harrogate District Hospital', town: 'Harrogate', lat: 53.994, lng: -1.521, trust: 'Harrogate and District NHS Foundation Trust' },
            ],
          },
          {
            id: 'keighley-airedale',
            name: 'Keighley (Airedale)',
            hospitals: [
              { id: 'airedale', name: 'Airedale General Hospital', town: 'Keighley (Airedale)', lat: 53.898, lng: -1.963, trust: 'Airedale NHS Foundation Trust' },
            ],
          },
          {
            id: 'dewsbury',
            name: 'Dewsbury',
            hospitals: [
              { id: 'dewsbury', name: 'Dewsbury and District Hospital', town: 'Dewsbury', lat: 53.695, lng: -1.649, trust: 'Mid Yorkshire Teaching NHS Trust' },
            ],
          },
        ],
      },
    ],
  },
]

export function getFoundationSchool(id: string) {
  return foundationSchools.find((d) => d.id === id)
}

export function getSubgroup(schoolId: string, subgroupId: string) {
  return getFoundationSchool(schoolId)?.subgroups.find((s) => s.id === subgroupId)
}

export function getCity(schoolId: string, subgroupId: string, cityId: string) {
  return getSubgroup(schoolId, subgroupId)?.cities.find((c) => c.id === cityId)
}

export function countHospitals(school: FoundationSchool) {
  return school.subgroups.reduce(
    (n, s) => n + s.cities.reduce((m, c) => m + c.hospitals.length, 0),
    0,
  )
}

export function countCitiesInSubgroup(subgroup: { cities: unknown[] }) {
  return subgroup.cities.length
}

export function countHospitalsInSubgroup(subgroup: {
  cities: { hospitals: unknown[] }[]
}) {
  return subgroup.cities.reduce((n, c) => n + c.hospitals.length, 0)
}
