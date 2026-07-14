const REGION_IMAGES = {
  'Gangtok & Central/East': 'https://commons.wikimedia.org/wiki/Special:FilePath/Brilliant%20Morning%20Rays,%20Saramsa%20Garden,%20Gangtok,%20Sikkim%20Wiki%20Loves%20Earth%202017%20-%20India.jpg',
  'Tsomgo–Nathula': 'https://commons.wikimedia.org/wiki/Special:FilePath/Tsongmo%20Lake%20or%20Changu%20Lake%20-%20East%20Sikkim.jpg',
  'Old Silk Route & Pakyong': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchenjungha%20from%20Thambi.jpg',
  'North Sikkim': 'https://commons.wikimedia.org/wiki/Special:FilePath/Yumthang%20valley,%20Lachung%20Sikkim%20India%202012.jpg',
  'West Sikkim & Gyalshing': 'https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise%20over%20Kangchenjunga.jpg',
  'Soreng & Surroundings': 'https://commons.wikimedia.org/wiki/Special:FilePath/Kanchenjungha%20from%20Thambi.jpg',
  'South Sikkim & Namchi': 'https://commons.wikimedia.org/wiki/Special:FilePath/Large%20Gautama%20Buddha%20statue%20in%20Buddha%20Park%20of%20Ravangla,%20Sikkim.jpg'
};

const ITINERARIES = [
  {
    id: 'essential',
    duration: '5N / 6D',
    name: 'Essential Sikkim',
    eyebrow: 'The practical short journey',
    coverage: 'Gangtok + Lachung–Yumthang',
    pace: 'Balanced',
    bestFor: 'First-time visitors with limited time',
    roadIntensity: 'Moderate to high',
    roadHours: 25,
    highestAltitude: '4,724 m optional',
    permitDays: 2,
    relaxedEvenings: 3,
    hotelChanges: 2,
    regions: 2,
    difficulty: 3,
    accent: 'alpine',
    summary: 'A realistic first look at Sikkim, with a calm Gangtok acclimatisation day and a two-night North Sikkim rhythm that avoids a punishing same-day return.',
    days: [
      {
        day: 1,
        title: 'Gateway arrival and Teesta Valley transfer',
        start: 'Bagdogra / NJP / Siliguri', end: 'Gangtok', overnight: 'Gangtok',
        departure: '11:00–13:00', arrival: '16:30–18:30', driving: '4.5–5.5 hrs', distance: '120–125 km',
        altitude: '1,650 m', elevation: '+1,450 m', road: 'Moderate', permit: 'green', weather: 'Normal mountain-road dependency',
        transport: 'Private 6/7-seater SUV recommended', stops: 3,
        image: REGION_IMAGES['Gangtok & Central/East'],
        mapQuery: 'Bagdogra Airport to Gangtok via Teesta Bazaar',
        backup: 'Late arrival: transfer only, skip MG Marg and have an early dinner.',
        schedule: [
          ['11:00', 'Meet driver, luggage loading and trip briefing', '30–45 min'],
          ['11:45', 'Depart gateway; cross Siliguri traffic belt', '60–75 min'],
          ['13:15', 'Lunch and washroom break before the hill section', '45 min'],
          ['14:00', 'Teesta Valley drive with one photography stop', '2 hr 30 min'],
          ['16:30', 'Tea / washroom stop near Rangpo or Singtam', '20 min'],
          ['17:30', 'Hotel check-in and complete rest', '60 min'],
          ['19:00', 'Gentle MG Marg walk, only if energy permits', '60–90 min'],
          ['20:30', 'Dinner and early sleep', '—']
        ]
      },
      {
        day: 2,
        title: 'Gangtok sights and acclimatisation',
        start: 'Gangtok', end: 'Gangtok', overnight: 'Gangtok',
        departure: '08:00', arrival: '17:00', driving: '2.5–3 hrs local', distance: '35–45 km',
        altitude: '1,650–2,130 m', elevation: '+480 m', road: 'Easy to moderate', permit: 'green', weather: 'Viewpoints depend on cloud cover',
        transport: 'Local SUV / taxi', stops: 7,
        image: REGION_IMAGES['Gangtok & Central/East'],
        mapQuery: 'Tashi View Point Gangtok',
        backup: 'Rainy-day cultural circuit: Tibetology, Do Drul Chorten, monastery and cafés.',
        schedule: [
          ['08:00', 'Breakfast and unhurried departure', '45 min'],
          ['09:00', 'Tashi View Point + Ganesh Tok', '75 min'],
          ['10:30', 'Hanuman Tok and refreshment stop', '60 min'],
          ['12:00', 'Enchey Monastery', '40 min'],
          ['13:00', 'Proper lunch break', '60 min'],
          ['14:15', 'Do Drul Chorten + Namgyal Institute of Tibetology', '90 min'],
          ['16:00', 'Gangtok Ropeway, subject to operations', '45 min'],
          ['17:15', 'Hotel rest; free MG Marg evening', '—']
        ]
      },
      {
        day: 3,
        title: 'Gangtok to Lachung through North Sikkim',
        start: 'Gangtok', end: 'Lachung', overnight: 'Lachung',
        departure: '08:00', arrival: '17:30–19:00', driving: '7–8 hrs excluding stops', distance: '115–125 km',
        altitude: '2,700 m', elevation: '+1,050 m', road: 'High', permit: 'red', weather: 'Road clearance and permit dependent',
        transport: 'Registered local SUV', stops: 6,
        image: REGION_IMAGES['North Sikkim'],
        mapQuery: 'Gangtok to Lachung via Mangan and Chungthang',
        backup: 'If North Sikkim access is suspended, use Rumtek–Ranka or Namchi–Ravangla instead.',
        schedule: [
          ['07:15', 'Breakfast, document check and permit verification', '45 min'],
          ['08:00', 'Depart Gangtok', '2 hrs'],
          ['10:00', 'Mangan refreshment and washroom stop', '25 min'],
          ['10:40', 'Singhik viewpoint, if visibility is good', '20 min'],
          ['12:15', 'Seven Sisters / Naga Waterfall short stops', '35 min total'],
          ['13:30', 'Lunch on route', '45 min'],
          ['14:30', 'Continue via Chungthang with driver-rest pause', '2.5–3 hrs'],
          ['18:00', 'Lachung check-in, hot beverage and complete rest', '60 min'],
          ['19:30', 'Dinner; no late-night activity', '—']
        ]
      },
      {
        day: 4,
        title: 'Yumthang Valley and optional Zero Point',
        start: 'Lachung', end: 'Lachung', overnight: 'Lachung',
        departure: '06:00', arrival: '14:30–16:30', driving: '4.5–6 hrs', distance: '50–95 km',
        altitude: '3,564 m / 4,724 m optional', elevation: '+2,020 m optional', road: 'High', permit: 'red', weather: 'Strongly weather dependent',
        transport: 'Registered local SUV', stops: 4,
        image: REGION_IMAGES['North Sikkim'],
        mapQuery: 'Lachung to Yumthang Valley',
        backup: 'Skip Zero Point; spend longer in Yumthang and return early to Lachung.',
        schedule: [
          ['05:30', 'Tea and packed / early breakfast arrangement', '25 min'],
          ['06:00', 'Depart Lachung in full warm layers', '1.5–2 hrs'],
          ['08:00', 'Yumthang Valley: slow walk and photography', '75 min'],
          ['09:30', 'Hot-spring area, only if accessible and suitable', '30 min'],
          ['10:15', 'Optional Zero Point extension after group health check', '2.5–3 hrs return'],
          ['13:30', 'Warm lunch on return', '45 min'],
          ['15:00', 'Hotel rest and hydration', '2 hrs'],
          ['18:30', 'Quiet evening and early dinner', '—']
        ]
      },
      {
        day: 5,
        title: 'Lachung to Gangtok, with a slower return rhythm',
        start: 'Lachung', end: 'Gangtok', overnight: 'Gangtok',
        departure: '08:30', arrival: '17:00–18:30', driving: '7–8 hrs excluding stops', distance: '115–125 km',
        altitude: '1,650 m', elevation: '−1,050 m', road: 'High', permit: 'amber', weather: 'Mountain-road dependency',
        transport: 'Registered local SUV', stops: 4,
        image: REGION_IMAGES['North Sikkim'],
        mapQuery: 'Lachung to Gangtok via Chungthang',
        backup: 'If delayed, keep the evening completely free and move dinner to the hotel.',
        schedule: [
          ['07:30', 'Relaxed breakfast and luggage loading', '60 min'],
          ['08:30', 'Depart Lachung', '2 hrs'],
          ['10:30', 'Chungthang tea / washroom break', '25 min'],
          ['12:45', 'Lunch near Mangan', '50 min'],
          ['14:00', 'Scenic Teesta drive with one driver-rest stop', '2.5–3 hrs'],
          ['17:30', 'Gangtok hotel check-in and 60-minute rest', '60 min'],
          ['19:00', 'Optional café or MG Marg evening', '—']
        ]
      },
      {
        day: 6,
        title: 'Departure with a connection-safe buffer',
        start: 'Gangtok', end: 'Gateway', overnight: '—',
        departure: '06:00–08:00', arrival: '11:00–14:00', driving: '4.5–5.5 hrs', distance: '120–125 km',
        altitude: '120 m at Siliguri', elevation: '−1,530 m', road: 'Moderate', permit: 'green', weather: 'Traffic and road dependent',
        transport: 'Private SUV recommended', stops: 2,
        image: REGION_IMAGES['Gangtok & Central/East'],
        mapQuery: 'Gangtok to Bagdogra Airport',
        backup: 'For early flights/trains, stay near Siliguri/NJP the previous night instead.',
        schedule: [
          ['06:00', 'Early breakfast / packed meal and check-out', '30 min'],
          ['06:30', 'Depart Gangtok', '2 hrs'],
          ['08:30', 'Tea and washroom stop', '20 min'],
          ['10:45', 'Enter Siliguri traffic belt', '45–75 min'],
          ['12:00', 'Gateway drop with recommended onward buffer', '—']
        ]
      }
    ]
  },
  {
    id: 'highlights',
    duration: '6N / 7D',
    name: 'Sikkim Highlights',
    eyebrow: 'More landscapes, a faster rhythm',
    coverage: 'Gangtok + Tsomgo + Lachung + South + Pelling',
    pace: 'Active but manageable',
    bestFor: 'Travellers wanting varied landscapes',
    roadIntensity: 'High on selected days',
    roadHours: 34,
    highestAltitude: '4,724 m optional',
    permitDays: 3,
    relaxedEvenings: 2,
    hotelChanges: 3,
    regions: 5,
    difficulty: 4,
    accent: 'marigold',
    summary: 'A high-coverage journey that adds the Tsomgo–Nathula circuit and a West Sikkim finish. Day 4 is intentionally labelled as a long transfer day.',
    days: [
      {
        day: 1, title: 'Gateway arrival and transfer to Gangtok', start: 'Bagdogra / NJP', end: 'Gangtok', overnight: 'Gangtok',
        departure: '11:00–13:00', arrival: '17:00–18:30', driving: '4.5–5.5 hrs', distance: '125 km', altitude: '1,650 m', elevation: '+1,450 m', road: 'Moderate', permit: 'green', weather: 'Road dependent', transport: 'Private SUV', stops: 3,
        image: REGION_IMAGES['Gangtok & Central/East'], mapQuery: 'Bagdogra Airport to Gangtok', backup: 'Late arrival: hotel dinner and sleep.',
        schedule: [['11:00','Meet driver and load luggage','40 min'],['12:00','Depart gateway','90 min'],['13:30','Lunch before the hill road','45 min'],['14:15','Teesta Valley transfer','2.5–3 hrs'],['17:30','Check-in and rest','60 min'],['19:00','MG Marg only if comfortable','—']]
      },
      {
        day: 2, title: 'Tsomgo Lake, Baba Mandir and Nathula', start: 'Gangtok', end: 'Gangtok', overnight: 'Gangtok',
        departure: '07:00', arrival: '16:30–18:00', driving: '5–6.5 hrs', distance: '90–120 km', altitude: '4,310 m', elevation: '+2,660 m', road: 'High', permit: 'red', weather: 'Operational clearance essential', transport: 'Registered local vehicle', stops: 4,
        image: REGION_IMAGES['Tsomgo–Nathula'], mapQuery: 'Gangtok to Tsomgo Lake and Nathula Pass', backup: 'Tsomgo-only if Nathula closes; Gangtok local circuit if the entire road closes.',
        schedule: [['06:30','Breakfast and permit/document check','30 min'],['07:00','Depart Gangtok','2–2.5 hrs'],['09:30','Tsomgo Lake: slow acclimatised visit','60 min'],['10:45','Baba Mandir circuit','45 min'],['12:00','Nathula, only after final clearance','45 min'],['13:15','Warm lunch / tea stop','45 min'],['14:15','Descend to Gangtok','2–2.5 hrs'],['17:00','Hotel rest and free evening','—']]
      },
      {
        day: 3, title: 'Gangtok to Lachung', start: 'Gangtok', end: 'Lachung', overnight: 'Lachung',
        departure: '08:00', arrival: '18:00', driving: '7–8 hrs', distance: '120 km', altitude: '2,700 m', elevation: '+1,050 m', road: 'High', permit: 'red', weather: 'Permit and road dependent', transport: 'Registered local SUV', stops: 6,
        image: REGION_IMAGES['North Sikkim'], mapQuery: 'Gangtok to Lachung via Mangan', backup: 'Use a lower-altitude Gangtok / South Sikkim day if access is suspended.',
        schedule: [['07:15','Breakfast and permit verification','45 min'],['08:00','Depart','2 hrs'],['10:00','Mangan break','25 min'],['10:45','Singhik viewpoint','20 min'],['12:30','Waterfall stops','35 min'],['13:30','Lunch','45 min'],['14:30','Continue via Chungthang','3 hrs'],['18:00','Check-in and complete rest','—']]
      },
      {
        day: 4, title: 'Yumthang Valley, optional Zero Point, return to Gangtok', start: 'Lachung', end: 'Gangtok', overnight: 'Gangtok',
        departure: '05:30', arrival: '20:00–21:30', driving: '10–12 hrs', distance: '170–210 km', altitude: '4,724 m optional', elevation: '+2,020 m then −3,074 m', road: 'Very high', permit: 'red', weather: 'Strongly weather dependent', transport: 'Registered local SUV', stops: 6,
        image: REGION_IMAGES['North Sikkim'], mapQuery: 'Lachung to Yumthang Valley to Gangtok', backup: 'Skip Zero Point and leave Lachung by 10:30; or retain a second Lachung night and revise Day 5.',
        schedule: [['05:00','Tea and packed breakfast','25 min'],['05:30','Depart for Yumthang','1.5–2 hrs'],['07:30','Yumthang Valley','60 min'],['08:45','Optional Zero Point only if group and road are fit','2.5–3 hrs'],['12:00','Return to Lachung for lunch and luggage','75 min'],['13:15','Begin long transfer to Gangtok','3 hrs'],['16:15','Mangan refreshment / driver-rest stop','30 min'],['20:00','Late check-in; dinner at hotel','—']]
      },
      {
        day: 5, title: 'Gangtok to Pelling through South Sikkim', start: 'Gangtok', end: 'Pelling', overnight: 'Pelling',
        departure: '08:30', arrival: '18:00', driving: '6–7.5 hrs', distance: '120–145 km', altitude: '2,150 m', elevation: '+500 m net', road: 'High', permit: 'green', weather: 'Viewpoints depend on visibility', transport: 'Private SUV', stops: 4,
        image: REGION_IMAGES['South Sikkim & Namchi'], mapQuery: 'Gangtok to Pelling via Ravangla', backup: 'Choose only one major stop if the previous night ended late.',
        schedule: [['07:30','Breakfast and check-out','60 min'],['08:30','Depart Gangtok','2 hrs'],['10:30','Choose Temi Tea Garden or Namchi','75 min'],['12:30','Lunch','50 min'],['13:30','Choose Buddha Park or Samdruptse','75 min'],['15:00','Continue to Pelling','2.5–3 hrs'],['18:00','Check-in and rest','—']]
      },
      {
        day: 6, title: 'Pelling and West Sikkim circuit', start: 'Pelling', end: 'Pelling', overnight: 'Pelling',
        departure: '08:00', arrival: '17:30', driving: '4–5 hrs', distance: '85–105 km', altitude: '2,150 m', elevation: 'Variable', road: 'Moderate to high', permit: 'green', weather: 'Outdoor views weather dependent', transport: 'Private SUV', stops: 7,
        image: REGION_IMAGES['West Sikkim & Gyalshing'], mapQuery: 'Pelling sightseeing circuit', backup: 'Rain plan: Pemayangtse, Rabdentse, local cafés and monastery-focused circuit.',
        schedule: [['08:00','Pemayangtse Monastery','45 min'],['09:00','Rabdentse forest walk and ruins','75 min'],['10:45','Chenrezig statue and Skywalk','60 min'],['12:15','Lunch','60 min'],['13:30','Khecheopalri Lake','50 min'],['15:00','Kanchenjunga and Rimbi waterfalls','60 min'],['17:00','Return; optional Darap village only if daylight permits','—']]
      },
      {
        day: 7, title: 'Pelling to gateway departure', start: 'Pelling', end: 'NJP / Bagdogra / Siliguri', overnight: '—',
        departure: '05:30–07:00', arrival: '12:00–14:30', driving: '5.5–7 hrs', distance: '135–150 km', altitude: '120 m', elevation: '−2,030 m', road: 'High', permit: 'green', weather: 'Traffic and hill-road dependency', transport: 'Private SUV', stops: 2,
        image: REGION_IMAGES['West Sikkim & Gyalshing'], mapQuery: 'Pelling to Bagdogra Airport', backup: 'For a morning connection, leave Pelling one day earlier and sleep near the gateway.',
        schedule: [['05:30','Check-out with packed breakfast','30 min'],['06:00','Depart Pelling','2.5 hrs'],['08:30','Breakfast / washroom stop','30 min'],['09:00','Continue to Siliguri belt','3–4 hrs'],['13:00','Gateway drop with connection buffer','—']]
      }
    ]
  },
  {
    id: 'grand',
    duration: '7N / 8D',
    name: 'The Grand Sikkim Circuit',
    eyebrow: 'The high-altitude, high-coverage journey',
    coverage: 'Gangtok + Tsomgo + Lachen + Gurudongmar + Lachung + South + Pelling',
    pace: 'Comprehensive',
    bestFor: 'Travellers comfortable with long mountain drives and altitude',
    roadIntensity: 'High',
    roadHours: 41,
    highestAltitude: '5,183 m',
    permitDays: 4,
    relaxedEvenings: 2,
    hotelChanges: 4,
    regions: 5,
    difficulty: 5,
    accent: 'navy',
    summary: 'A demanding circuit that combines East, North, South and West Sikkim. It preserves a dedicated Lachen night and clearly identifies Gurudongmar day as the hardest.',
    days: [
      { day: 1, title: 'Arrival, Teesta transfer and relaxed MG Marg evening', start: 'Gateway', end: 'Gangtok', overnight: 'Gangtok', departure: '11:00–13:00', arrival: '17:00–18:30', driving: '4.5–5.5 hrs', distance: '125 km', altitude: '1,650 m', elevation: '+1,450 m', road: 'Moderate', permit: 'green', weather: 'Road dependent', transport: 'Private SUV', stops: 3, image: REGION_IMAGES['Gangtok & Central/East'], mapQuery: 'Bagdogra to Gangtok', backup: 'Skip MG Marg if arrival is late.', schedule: [['11:00','Meet driver and load luggage','40 min'],['12:00','Depart gateway','90 min'],['13:30','Lunch','45 min'],['14:15','Teesta Valley drive','3 hrs'],['17:30','Check-in and rest','60 min'],['19:00','Gentle MG Marg walk','—']] },
      { day: 2, title: 'Tsomgo Lake, Baba Mandir and Nathula', start: 'Gangtok', end: 'Gangtok', overnight: 'Gangtok', departure: '07:00', arrival: '17:00', driving: '5–6.5 hrs', distance: '90–120 km', altitude: '4,310 m', elevation: '+2,660 m', road: 'High', permit: 'red', weather: 'Operational clearance essential', transport: 'Registered local vehicle', stops: 4, image: REGION_IMAGES['Tsomgo–Nathula'], mapQuery: 'Gangtok to Nathula Pass via Tsomgo Lake', backup: 'Tsomgo-only or Gangtok local circuit.', schedule: [['06:30','Breakfast and permit check','30 min'],['07:00','Depart','2 hrs'],['09:15','Tsomgo Lake','60 min'],['10:30','Baba Mandir','45 min'],['11:45','Nathula subject to final clearance','45 min'],['13:15','Lunch / warm tea','45 min'],['14:15','Return to Gangtok','2.5 hrs'],['17:00','Rest','—']] },
      { day: 3, title: 'Gangtok to Lachen', start: 'Gangtok', end: 'Lachen', overnight: 'Lachen', departure: '07:30', arrival: '17:30–19:00', driving: '7.5–9 hrs', distance: '120–130 km', altitude: '2,750 m', elevation: '+1,100 m', road: 'High', permit: 'red', weather: 'Permit and road dependent', transport: 'Registered local SUV', stops: 6, image: REGION_IMAGES['North Sikkim'], mapQuery: 'Gangtok to Lachen via Mangan and Chungthang', backup: 'Replace North Sikkim leg with a lower-altitude Silk Route or South Sikkim plan.', schedule: [['06:45','Breakfast and document check','45 min'],['07:30','Depart Gangtok','2 hrs'],['09:30','Mangan tea stop','25 min'],['10:15','Singhik viewpoint','20 min'],['12:00','Waterfall stops','35 min'],['13:00','Lunch','45 min'],['14:00','Chungthang and onward drive','3–4 hrs'],['18:00','Lachen check-in, hydration and early rest','—']] },
      { day: 4, title: 'Gurudongmar Lake and transfer to Lachung', start: 'Lachen', end: 'Lachung', overnight: 'Lachung', departure: '04:30', arrival: '17:00–19:00', driving: '10–12 hrs', distance: '185–210 km', altitude: '5,183 m', elevation: '+2,433 m then −2,483 m', road: 'Extreme', permit: 'red', weather: 'Highest weather and access uncertainty', transport: 'Registered high-clearance local SUV', stops: 6, image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gurudongmar%20Lake%20Sikkim%2C%20India%20%28edit%29.jpg', mapQuery: 'Lachen to Gurudongmar Lake to Lachung', backup: 'If Gurudongmar is inaccessible, visit Thangu / Chopta viewpoint and transfer earlier to Lachung.', schedule: [['04:00','Tea and packed breakfast','20 min'],['04:30','Depart Lachen','2.5 hrs'],['07:00','Thangu acclimatisation stop','25 min'],['08:00','Chopta viewpoint / checkpoint sequence','30 min'],['09:30','Gurudongmar: very short, non-strenuous visit','30 min'],['10:00','Immediate descent','3 hrs'],['13:00','Lunch near Lachen / Chungthang','50 min'],['14:00','Transfer to Lachung','2.5–3.5 hrs'],['18:00','Check-in and complete rest','—']] },
      { day: 5, title: 'Yumthang Valley, optional Zero Point, return to Gangtok', start: 'Lachung', end: 'Gangtok', overnight: 'Gangtok', departure: '05:45', arrival: '19:30–21:00', driving: '9–11 hrs', distance: '170–205 km', altitude: '4,724 m optional', elevation: '+2,024 m then −3,074 m', road: 'Very high', permit: 'red', weather: 'Strongly weather dependent', transport: 'Registered local SUV', stops: 6, image: REGION_IMAGES['North Sikkim'], mapQuery: 'Lachung to Yumthang Valley to Gangtok', backup: 'Skip Zero Point after the demanding Gurudongmar day; prioritise Yumthang and an earlier descent.', schedule: [['05:15','Tea and early breakfast','25 min'],['05:45','Depart Lachung','1.5 hrs'],['07:30','Yumthang Valley','60 min'],['08:45','Optional Zero Point only if everyone is well','2.5–3 hrs'],['12:00','Return for lunch and luggage','75 min'],['13:15','Long transfer to Gangtok','3 hrs'],['16:30','Mangan / driver-rest break','30 min'],['20:00','Gangtok check-in and dinner','—']] },
      { day: 6, title: 'Gangtok to Pelling through South Sikkim', start: 'Gangtok', end: 'Pelling', overnight: 'Pelling', departure: '08:30', arrival: '18:00', driving: '6–7.5 hrs', distance: '120–145 km', altitude: '2,150 m', elevation: '+500 m net', road: 'High', permit: 'green', weather: 'Visibility dependent', transport: 'Private SUV', stops: 4, image: REGION_IMAGES['South Sikkim & Namchi'], mapQuery: 'Gangtok to Pelling via Ravangla', backup: 'Select one route pair only: Temi + Ravangla, Namchi + Char Dham, or Samdruptse + Ravangla.', schedule: [['07:30','Breakfast and check-out','60 min'],['08:30','Depart','2 hrs'],['10:30','Selected South Sikkim stop 1','75 min'],['12:15','Lunch','50 min'],['13:15','Selected stop 2','75 min'],['15:00','Continue to Pelling','3 hrs'],['18:00','Check-in and rest','—']] },
      { day: 7, title: 'Full Pelling and West Sikkim circuit', start: 'Pelling', end: 'Pelling', overnight: 'Pelling', departure: '08:00', arrival: '17:30', driving: '4–5 hrs', distance: '85–105 km', altitude: '2,150 m', elevation: 'Variable', road: 'Moderate to high', permit: 'green', weather: 'Views depend on cloud cover', transport: 'Private SUV', stops: 7, image: REGION_IMAGES['West Sikkim & Gyalshing'], mapQuery: 'Pelling sightseeing', backup: 'Monastery and heritage circuit if rain affects waterfalls / Skywalk.', schedule: [['08:00','Pemayangtse Monastery','45 min'],['09:00','Rabdentse Ruins','75 min'],['10:45','Chenrezig Skywalk','60 min'],['12:15','Lunch','60 min'],['13:30','Khecheopalri Lake','50 min'],['15:00','Kanchenjunga + Rimbi waterfalls','60 min'],['17:00','Optional Darap stop if daylight remains','—']] },
      { day: 8, title: 'Pelling to gateway with onward-journey buffer', start: 'Pelling', end: 'NJP / Bagdogra / Siliguri', overnight: '—', departure: '05:30–07:00', arrival: '12:00–14:30', driving: '5.5–7 hrs', distance: '135–150 km', altitude: '120 m', elevation: '−2,030 m', road: 'High', permit: 'green', weather: 'Traffic and hill-road dependency', transport: 'Private SUV', stops: 2, image: REGION_IMAGES['West Sikkim & Gyalshing'], mapQuery: 'Pelling to Bagdogra Airport', backup: 'Use a gateway hotel the previous night for early departures.', schedule: [['05:30','Check-out with packed breakfast','30 min'],['06:00','Depart','2.5 hrs'],['08:30','Meal / washroom stop','30 min'],['09:00','Continue to gateway','3–4 hrs'],['13:00','Drop with safe connection buffer','—']] }
    ]
  }
];

const DESTINATIONS = [
  ['gangtok','Gangtok','Gangtok & Central/East','1,650 m','Half to full day','Base city','green','Easy','Capital streets, monasteries and ridge views make Gangtok the natural first base for an acclimatised Sikkim journey.','Gangtok Sikkim','All itineraries'],
  ['mg-marg','MG Marg','Gangtok & Central/East','1,650 m','1–2 hrs','From most Gangtok hotels: 5–20 min','green','Easy','A pedestrian evening promenade for cafés, local shopping and a gentle first-night walk.','MG Marg Gangtok','All itineraries'],
  ['tashi','Tashi View Point','Gangtok & Central/East','~1,850 m','30–45 min','Gangtok: 25–40 min','green','Easy','An early-morning viewpoint where clear skies may reveal the Kanchenjunga range.','Tashi View Point','5N/6D'],
  ['hanuman','Hanuman Tok','Gangtok & Central/East','~2,130 m','30–45 min','Gangtok: 25–40 min','green','Easy','A high ridge temple with broad mountain views and a calm, maintained setting.','Hanuman Tok Gangtok','5N/6D'],
  ['tibetology','Namgyal Institute of Tibetology','Gangtok & Central/East','~1,550 m','60–75 min','Central Gangtok: 10–20 min','green','Easy','A focused cultural stop for Himalayan Buddhist art, manuscripts and material culture.','Namgyal Institute of Tibetology','5N/6D'],
  ['rumtek','Rumtek Monastery','Gangtok & Central/East','~1,500 m','1–1.5 hrs','Gangtok: 60–90 min','amber','Moderate','A significant monastic complex best treated as a dedicated half-day circuit with Ranka.','Rumtek Monastery','Optional'],
  ['saramsa','Saramsa Garden','Gangtok & Central/East','~1,200 m','60–90 min','Gangtok: 35–50 min','green','Easy','A lower-altitude garden stop suited to relaxed arrival or backup days.','Saramsa Garden Sikkim','Optional'],
  ['tsomgo','Tsomgo Lake','Tsomgo–Nathula','3,753 m','45–75 min','Gangtok: 2–3 hrs','red','Moderate','A glacial high-altitude lake on the Nathula road, reached only with permit and road clearance.','Tsomgo Lake','6N/7D, 7N/8D'],
  ['baba','Baba Mandir','Tsomgo–Nathula','~4,000 m','30–45 min','Tsomgo: 45–70 min','red','Moderate','A high-altitude memorial stop generally combined with Tsomgo and, when open, Nathula.','Baba Harbhajan Singh Temple','6N/7D, 7N/8D'],
  ['nathula','Nathula Pass','Tsomgo–Nathula','4,310 m','30–45 min','Gangtok: 3–4 hrs','red','Demanding','A sensitive border pass with strict permit, nationality and operational-clearance rules.','Nathula Pass','6N/7D, 7N/8D'],
  ['kupup','Kupup / Elephant Lake','Tsomgo–Nathula','~4,000 m','30–45 min','Gangtok: 4–5 hrs','red','Demanding','A remote high-altitude section of the eastern circuit, often combined with the Old Silk Route.','Kupup Lake Sikkim','Optional'],
  ['pakyong','Pakyong','Old Silk Route & Pakyong','~1,120 m','1–2 hrs','Gangtok: 45–70 min','green','Easy','A lower-altitude gateway district; flight connectivity should always be checked live.','Pakyong Sikkim','Journey planner'],
  ['aritar','Aritar Lake','Old Silk Route & Pakyong','~1,500 m','1–2 hrs','Gangtok: 3–4 hrs','amber','Easy','A quieter east-Sikkim lake and village circuit suited to a lower-altitude alternative day.','Aritar Lake','Optional'],
  ['zuluk','Zuluk','Old Silk Route & Pakyong','~2,900 m','1–2 hrs','Gangtok: 5–7 hrs','red','High','A remote Silk Route village near the iconic hairpin-bend section; local permits and vehicles apply.','Zuluk Sikkim','Optional'],
  ['thambi','Thambi View Point','Old Silk Route & Pakyong','~3,400 m','30–45 min','Zuluk: 45–70 min','red','High','A dramatic lookout over the zig-zag road, dependent on visibility and road clearance.','Thambi View Point','Optional'],
  ['nathang','Nathang Valley','Old Silk Route & Pakyong','~4,000 m','1–2 hrs','Zuluk: 2–3 hrs','red','Demanding','A sparse high-altitude valley requiring early starts, permit checks and conservative health planning.','Nathang Valley Sikkim','Optional'],
  ['mangan','Mangan','North Sikkim','~1,200 m','20–40 min stop','Gangtok: 2–3 hrs','amber','Easy','The practical refreshment and permit-route checkpoint town for most North Sikkim journeys.','Mangan Sikkim','All North itineraries'],
  ['singhik','Singhik View Point','North Sikkim','~1,560 m','20–30 min','Mangan: 15–30 min','amber','Easy','A brief viewpoint stop that works only when mountain visibility is favourable.','Singhik View Point','All North itineraries'],
  ['chungthang','Chungthang','North Sikkim','~1,790 m','20–40 min stop','Mangan: 2–3 hrs','red','Easy','The key road junction where the Lachen and Lachung valleys divide.','Chungthang Sikkim','All North itineraries'],
  ['lachung','Lachung','North Sikkim','2,700 m','Overnight base','Gangtok: 7–9 hrs','red','Moderate','A mountain village used as the overnight base for Yumthang and Zero Point.','Lachung Sikkim','All itineraries'],
  ['yumthang','Yumthang Valley','North Sikkim','3,564–3,700 m','60–90 min','Lachung: 1.5–2 hrs','red','Moderate','A broad alpine valley with river, pasture and seasonal rhododendrons; access is weather dependent.','Yumthang Valley','All itineraries'],
  ['zero','Zero Point / Yumesamdong','North Sikkim','~4,724 m','30–45 min','Yumthang: 60–90 min','red','Demanding','An optional high-altitude extension that should be skipped whenever health, road or weather conditions are unfavourable.','Zero Point Sikkim','Optional all itineraries'],
  ['lachen','Lachen','North Sikkim','2,750 m','Overnight base','Gangtok: 8–10 hrs','red','Moderate','The overnight base for the Gurudongmar route; evenings should be kept quiet and restorative.','Lachen Sikkim','7N/8D'],
  ['thangu','Thangu Valley','North Sikkim','~3,900 m','20–30 min','Lachen: 2–3 hrs','red','Demanding','A vital acclimatisation halt before the higher Gurudongmar plateau.','Thangu Valley','7N/8D'],
  ['gurudongmar','Gurudongmar Lake','North Sikkim','~5,183 m','20–30 min','Lachen: 4–5 hrs','red','Extreme','A sacred, very high-altitude lake reached on an uncertain early-morning route; not suitable for every traveller.','Gurudongmar Lake','7N/8D'],
  ['pelling','Pelling','West Sikkim & Gyalshing','~2,150 m','1–2 nights','Gangtok: 5–7 hrs','green','Easy','A ridge town used as the base for monasteries, heritage ruins, waterfalls and Kanchenjunga views.','Pelling Sikkim','6N/7D, 7N/8D'],
  ['pemayangtse','Pemayangtse Monastery','West Sikkim & Gyalshing','~2,080 m','45–60 min','Pelling: 15–25 min','green','Easy','One of Sikkim’s important monasteries and a calm start to the West Sikkim circuit.','Pemayangtse Monastery','6N/7D, 7N/8D'],
  ['rabdentse','Rabdentse Ruins','West Sikkim & Gyalshing','~2,000 m','60–90 min','Pelling: 20–30 min','green','Moderate','Forest paths lead to the atmospheric ruins of Sikkim’s former capital.','Rabdentse Ruins','6N/7D, 7N/8D'],
  ['skywalk','Chenrezig Statue & Skywalk','West Sikkim & Gyalshing','~2,200 m','45–75 min','Pelling: 20–35 min','green','Moderate','A contemporary pilgrimage and viewpoint complex with steps and exposed sections.','Chenrezig Skywalk Pelling','6N/7D, 7N/8D'],
  ['khecheopalri','Khecheopalri Lake','West Sikkim & Gyalshing','~1,700 m','45–60 min','Pelling: 1.5–2 hrs','green','Easy','A forest-framed sacred lake best visited quietly, with time for the approach walk.','Khecheopalri Lake','6N/7D, 7N/8D'],
  ['yuksom','Yuksom','West Sikkim & Gyalshing','~1,780 m','Half to full day','Pelling: 2–3 hrs','green','Moderate','A historic village and trekking gateway that deserves more time than a rushed add-on.','Yuksom Sikkim','Optional'],
  ['singshore','Singshore Bridge','West Sikkim & Gyalshing','~2,000 m','30–45 min','Pelling: 2–3 hrs','green','Moderate','A deep-valley suspension bridge on a long, winding route best combined carefully with Dentam.','Singshore Bridge','Optional'],
  ['rinchenpong','Rinchenpong','Soreng & Surroundings','~1,700 m','Half day','Pelling: 2–3 hrs','green','Easy','A quieter ridge settlement with monastery views and a slower village rhythm.','Rinchenpong Sikkim','Optional'],
  ['barsey','Barsey Rhododendron Sanctuary','Soreng & Surroundings','~3,000 m','Half to full day','Pelling: 3–5 hrs','amber','High','A walking-focused sanctuary whose conditions and bloom experience vary strongly by season.','Barsey Rhododendron Sanctuary','Optional'],
  ['namchi','Namchi','South Sikkim & Namchi','~1,675 m','Half day','Gangtok: 2.5–4 hrs','green','Easy','South Sikkim’s main town and a practical hub for Samdruptse and Siddhesvara Dham.','Namchi Sikkim','6N/7D, 7N/8D'],
  ['samdruptse','Samdruptse','South Sikkim & Namchi','~2,100 m','45–60 min','Namchi: 20–35 min','green','Moderate','A hilltop Guru Padmasambhava statue and viewpoint reached through a stepped complex.','Samdruptse Sikkim','6N/7D, 7N/8D'],
  ['temi','Temi Tea Garden','South Sikkim & Namchi','~1,800 m','60–90 min','Gangtok: 3–4 hrs','green','Easy','Sikkim’s celebrated tea landscape, most rewarding when given time for a gentle estate walk.','Temi Tea Garden','6N/7D, 7N/8D'],
  ['ravangla','Ravangla','South Sikkim & Namchi','~2,000 m','Half day','Gangtok: 3–4.5 hrs','green','Easy','A scenic South Sikkim town and the base for Buddha Park and nearby monasteries.','Ravangla Sikkim','6N/7D, 7N/8D'],
  ['buddha-park','Buddha Park','South Sikkim & Namchi','~2,130 m','60–90 min','Ravangla: 5–15 min','green','Easy','A landscaped spiritual complex built around a monumental Buddha statue and mountain backdrop.','Buddha Park Ravangla','6N/7D, 7N/8D'],
  ['borong','Borong','South Sikkim & Namchi','~1,760 m','Half day','Ravangla: 45–75 min','green','Moderate','A quieter village area suited to slow travel, forest views and a less crowded extension.','Borong Sikkim','Optional'],
  ['kitam','Kitam Bird Sanctuary','South Sikkim & Namchi','~1,200 m','2–3 hrs','Namchi: 1–2 hrs','green','Moderate','A lower-altitude birding option for travellers seeking a gentler nature day.','Kitam Bird Sanctuary','Optional']
].map((d, index) => ({
  id: d[0], name: d[1], region: d[2], altitude: d[3], duration: d[4], driveTime: d[5], permit: d[6], difficulty: d[7], overview: d[8], mapQuery: d[9], included: d[10],
  image: REGION_IMAGES[d[2]],
  accessibility: ['Easy','Moderate'].includes(d[7]) ? 'Generally accessible with normal care' : 'Route or altitude requires extra care',
  weather: d[6] === 'red' ? 'High dependency' : (index % 3 === 0 ? 'Moderate dependency' : 'Normal mountain variability'),
  publicTransport: ['Gangtok','MG Marg','Namchi','Ravangla','Pelling'].includes(d[1]) ? 'Available to the town; local taxi needed for sights' : (d[6] === 'red' ? 'Limited / organised local vehicle usually required' : 'Limited; shared jeeps may serve nearby towns'),
  restroom: d[6] === 'red' ? 'Basic and intermittent' : 'Available at town / attraction area',
  food: d[6] === 'red' ? 'Carry snacks; limited stalls' : 'Cafés or local eateries nearby',
  network: d[6] === 'red' ? 'Patchy to unavailable' : 'Usually available, with local gaps'
}));

const SEASONAL = {
  October: {
    badge: 'Clearer post-monsoon window',
    temperatures: 'Gangtok often cool; high-altitude mornings can feel near or below freezing.',
    daylight: 'Start major road days early and aim to finish before the mountain light fades.',
    clothing: 'Layered fleece, warm outer layer, cap, gloves and walking shoes.',
    note: 'Good visibility is possible, but road repairs, rain after-effects and local closures may still affect access.',
    departure: 'Recommended high-altitude departure: 05:30–07:00.'
  },
  November: {
    badge: 'Colder, sharper mountain season',
    temperatures: 'Colder mornings and nights; sub-zero conditions are possible on high circuits.',
    daylight: 'Shorter usable daylight makes punctual starts and conservative route planning essential.',
    clothing: 'Thermals, insulated layer, wind-resistant outerwear, gloves, cap and warm socks.',
    note: 'Snow is never guaranteed. Weather, ice and administrative decisions can close high roads temporarily.',
    departure: 'Recommended high-altitude departure: 05:00–06:30.'
  }
};

const PACKING = [
  'Original photo ID for every traveller', 'Passport-size photographs', 'Thermal base layers', 'Warm jacket / fleece',
  'Gloves and woollen cap', 'Comfortable grippy shoes', 'Sunscreen and sunglasses', 'Personal medication',
  'Motion-sickness preparation', 'Reusable water bottle', 'Power bank', 'Offline hotel and driver details'
];

window.SIKKIM_DATA = { ITINERARIES, DESTINATIONS, SEASONAL, PACKING, REGION_IMAGES };
