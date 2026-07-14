(() => {
  const { ITINERARIES, DESTINATIONS, SEASONAL, PACKING } = window.SIKKIM_DATA;
  const state = {
    activeItinerary: localStorage.getItem('activeItinerary') || 'essential',
    compare: JSON.parse(localStorage.getItem('compareItineraries') || '[]'),
    savedDays: JSON.parse(localStorage.getItem('savedDays') || '[]'),
    savedDestinations: JSON.parse(localStorage.getItem('savedDestinations') || '[]'),
    packing: JSON.parse(localStorage.getItem('packing') || '[]'),
    votes: JSON.parse(localStorage.getItem('votes') || '{}'),
    month: localStorage.getItem('month') || 'October',
    destinationLimit: 9
  };

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
  const activeItinerary = () => ITINERARIES.find(i => i.id === state.activeItinerary);
  const permitText = p => ({green:'No special permit', amber:'Check registration', red:'Protected route'}[p] || p);
  const save = () => {
    localStorage.setItem('activeItinerary', state.activeItinerary);
    localStorage.setItem('compareItineraries', JSON.stringify(state.compare));
    localStorage.setItem('savedDays', JSON.stringify(state.savedDays));
    localStorage.setItem('savedDestinations', JSON.stringify(state.savedDestinations));
    localStorage.setItem('packing', JSON.stringify(state.packing));
    localStorage.setItem('votes', JSON.stringify(state.votes));
    localStorage.setItem('month', state.month);
    updateSavedCount();
  };

  function imgTag(src, alt) {
    return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`;
  }

  function renderItineraryCards() {
    $('#itineraryCards').innerHTML = ITINERARIES.map(i => `
      <article class="itinerary-card ${i.id === state.activeItinerary ? 'selected' : ''}" data-card="${i.id}">
        <div class="card-image">
          ${imgTag(i.days[0].image, `${i.name} scenery in Sikkim`)}
          <span class="duration-badge">${i.duration}</span>
          <button class="compare-control" data-compare="${i.id}" aria-pressed="${state.compare.includes(i.id)}">${state.compare.includes(i.id) ? '✓ Comparing' : '+ Compare'}</button>
          <div class="card-title-overlay"><small>${i.eyebrow.toUpperCase()}</small><h3>${i.name}</h3></div>
        </div>
        <div class="card-body">
          <p>${i.summary}</p>
          <div class="stats-grid">
            <div class="stat"><small>REGIONS</small><strong>${i.regions} circuits</strong></div>
            <div class="stat"><small>ROAD HOURS</small><strong>≈ ${i.roadHours} hrs</strong></div>
            <div class="stat"><small>HIGHEST POINT</small><strong>${i.highestAltitude}</strong></div>
            <div class="stat"><small>PERMIT DAYS</small><strong>${i.permitDays} days</strong></div>
          </div>
          <div class="stat"><small>DIFFICULTY</small><div class="difficulty">${[1,2,3,4,5].map(n => `<i class="${n <= i.difficulty ? 'on' : ''}"></i>`).join('')}</div></div>
          <div class="card-actions"><button class="pill-btn small" data-view="${i.id}">View day-by-day</button><button class="ghost-btn" data-select="${i.id}" aria-label="Select ${i.name}">Select</button></div>
        </div>
      </article>`).join('');
    updateCompareBar();
  }

  function renderDetailTabs() {
    $('#detailTabs').innerHTML = ITINERARIES.map(i => `<button class="${i.id === state.activeItinerary ? 'active' : ''}" data-detail-tab="${i.id}">${i.duration}</button>`).join('');
  }

  function renderTimeline() {
    const i = activeItinerary();
    $('#detailTitle').textContent = i.name;
    $('#detailSummary').textContent = i.summary;
    $('#timeline').innerHTML = i.days.map((d, index) => {
      const key = `${i.id}-${d.day}`;
      const saved = state.savedDays.includes(key);
      return `<article class="day-card ${index === 0 ? 'open' : ''}" data-day="${d.day}">
        <span class="day-dot">${String(d.day).padStart(2,'0')}</span>
        <div class="day-shell">
          <button class="day-summary" data-open-day="${d.day}">
            <div><small>DAY ${d.day} · ${d.overnight === '—' ? 'DEPARTURE' : `OVERNIGHT ${d.overnight.toUpperCase()}`}</small><h3>${d.title}</h3><div class="day-route">${d.start} → ${d.end}</div></div>
            <div class="day-keyfacts"><span>◷ ${d.driving}</span><span>⌁ ${d.distance}</span><span>△ ${d.road}</span></div>
          </button>
          <div class="day-expand">
            <div class="day-meta">
              <div><small>DEPART</small><strong>${d.departure}</strong></div><div><small>ARRIVE</small><strong>${d.arrival}</strong></div><div><small>ALTITUDE</small><strong>${d.altitude}</strong></div><div><small>PERMIT</small><strong>${permitText(d.permit)}</strong></div>
              <div><small>ELEVATION</small><strong>${d.elevation}</strong></div><div><small>TRANSPORT</small><strong>${d.transport}</strong></div><div><small>STOPS</small><strong>${d.stops} planned</strong></div><div><small>WEATHER</small><strong>${d.weather}</strong></div>
            </div>
            <div class="schedule-list">${d.schedule.map(r => `<div class="schedule-row"><time>${r[0]}</time><span>${r[1]}</span><em>${r[2]}</em></div>`).join('')}</div>
            <div class="plan-b"><b>PLAN B</b><p>${d.backup}</p></div>
            <div class="day-actions"><button class="${saved ? 'saved' : ''}" data-save-day="${d.day}">${saved ? '✓ Saved' : '♡ Save this day'}</button><button data-swap-day="${d.day}">⇄ Swap experience</button><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}" target="_blank" rel="noopener">Open in Google Maps ↗</a></div>
          </div>
        </div>
      </article>`;
    }).join('');
    renderDetailTabs();
    updateMap(i.days[0]);
  }

  function updateMap(day) {
    $('#activeMapTitle').textContent = day.title;
    $('#mapMeta').textContent = `${day.distance} · ${day.driving} · ${permitText(day.permit)}`;
    const q = encodeURIComponent(day.mapQuery);
    $('#routeMap').src = `https://www.google.com/maps?q=${q}&output=embed`;
    $('#openMapLink').href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    $('#routeVisual').innerHTML = [12,38,65,88].map((x,idx)=>`<span class="route-point" style="left:${x}%;top:${idx%2?55:34}%"></span>`).join('');
  }

  function setActiveItinerary(id, scroll = false) {
    state.activeItinerary = id; save();
    $$('.duration-chip').forEach(b => b.classList.toggle('active', b.dataset.itinerary === id));
    renderItineraryCards(); renderTimeline();
    if (scroll) $('#day-plan').scrollIntoView({behavior:'smooth'});
  }

  function updateCompareBar() {
    const bar = $('#compareBar');
    bar.hidden = state.compare.length < 2;
    $('#compareCount').textContent = `${state.compare.length} itineraries selected`;
  }

  function renderCompare() {
    const chosen = ITINERARIES.filter(i => state.compare.includes(i.id));
    const rows = [
      ['Duration', ...chosen.map(i=>i.duration)],['Coverage',...chosen.map(i=>i.coverage)],['Pace',...chosen.map(i=>i.pace)],['Best for',...chosen.map(i=>i.bestFor)],['Road hours',...chosen.map(i=>`≈ ${i.roadHours} hrs`)],['Highest altitude',...chosen.map(i=>i.highestAltitude)],['Permit-dependent days',...chosen.map(i=>i.permitDays)],['Relaxed evenings',...chosen.map(i=>i.relaxedEvenings)],['Hotel changes',...chosen.map(i=>i.hotelChanges)],['Difficulty',...chosen.map(i=>`${i.difficulty}/5`)]
    ];
    $('#compareTable').innerHTML = `<div class="compare-wrapper"><div class="compare-grid" style="--compare-cols:${chosen.length}">${rows.map((r,ri)=>r.map((c,ci)=>`<div class="${ci===0?'label':''} ${ri===0&&ci>0?'head':''}">${c}</div>`).join('')).join('')}</div></div>`;
  }

  function fillRegions() {
    const regions = [...new Set(DESTINATIONS.map(d=>d.region))];
    $('#regionFilter').innerHTML += regions.map(r=>`<option value="${r}">${r}</option>`).join('');
  }

  function filteredDestinations() {
    const q = $('#destinationSearch').value.trim().toLowerCase();
    const region = $('#regionFilter').value;
    const permit = $('#permitFilter').value;
    return DESTINATIONS.filter(d => (!q || `${d.name} ${d.overview} ${d.region}`.toLowerCase().includes(q)) && (region==='all'||d.region===region) && (permit==='all'||d.permit===permit));
  }

  function renderDestinations() {
    const list = filteredDestinations();
    const shown = list.slice(0,state.destinationLimit);
    $('#destinationGrid').innerHTML = shown.map(d => {
      const saved = state.savedDestinations.includes(d.id); const votes = state.votes[d.id] || 0;
      return `<article class="destination-card">
        <div class="destination-image">${imgTag(d.image, `${d.name}, ${d.region}, Sikkim`)}<span class="destination-permit">${permitText(d.permit)}</span><button class="destination-save ${saved?'saved':''}" data-save-destination="${d.id}" aria-label="Save ${d.name}">${saved?'♥':'♡'}</button></div>
        <div class="destination-body"><small>${d.region.toUpperCase()}</small><h3>${d.name}</h3><p>${d.overview}</p><div class="destination-facts"><span>△ ${d.altitude}</span><span>◷ ${d.duration}</span><span>⌁ ${d.difficulty}</span></div><div class="destination-footer"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}" target="_blank" rel="noopener">Map ↗</a><button class="vote" data-vote="${d.id}">▲ Group vote <b>${votes}</b></button></div></div>
      </article>`;
    }).join('') || '<p class="empty-state">No destinations match these filters.</p>';
    $('#loadMoreDestinations').hidden = list.length <= state.destinationLimit;
  }

  const JOURNEY_CONTENT = {
    flight: `<div class="journey-panel"><div class="route-line-card"><div class="route-line"><div class="route-stop"><i>1</i><div><strong>Bhubaneswar Airport</strong><small>Check live direct or connecting options for selected dates.</small></div></div><div class="route-stop"><i>2</i><div><strong>Bagdogra Airport</strong><small>Allow luggage collection, meal and washroom time before the mountain transfer.</small></div></div><div class="route-stop"><i>3</i><div><strong>Gangtok</strong><small>Private SUV: typically 4.5–5.5 hours in normal conditions, excluding long stops.</small></div></div></div></div><div class="journey-info"><div class="info-card"><small>RECOMMENDED ARRIVAL</small><strong>Morning to early afternoon</strong><p>Avoid a late mountain transfer whenever possible.</p></div><div class="info-card"><small>PAKYONG OPTION</small><strong>Show only after live availability check</strong><p>Operations can be weather-sensitive; never treat this route as guaranteed.</p></div><div class="info-card"><small>GROUP DEFAULT</small><strong>Pre-arranged 6/7-seater SUV</strong><p>More comfortable for five travellers and luggage than splitting into multiple shared vehicles.</p></div></div></div>`,
    train: `<div class="journey-panel"><div class="route-line-card"><div class="route-line"><div class="route-stop"><i>1</i><div><strong>Bhubaneswar Railway Station</strong><small>Live train search should populate selected departure and arrival days.</small></div></div><div class="route-stop"><i>2</i><div><strong>New Jalpaiguri Junction</strong><small>Keep a refreshment, washroom and recovery buffer after an overnight journey.</small></div></div><div class="route-stop"><i>3</i><div><strong>Gangtok</strong><small>Private SUV or shared taxi from the designated stand; road time remains condition-dependent.</small></div></div></div></div><div class="journey-info"><div class="info-card"><small>LIVE DATA RULE</small><strong>Do not hard-code train numbers</strong><p>Schedules, operating days and timings can change.</p></div><div class="info-card"><small>CLASS GUIDANCE</small><strong>Choose a comfortable reserved class</strong><p>For a long overnight journey, prioritise rest rather than squeezing the budget.</p></div><div class="info-card"><small>ARRIVAL BUFFER</small><strong>60–90 minutes before hill transfer</strong><p>Freshen up, eat and regroup before the winding road.</p></div></div></div>`,
    mixed: `<div class="journey-panel"><div class="route-line-card"><div class="route-line"><div class="route-stop"><i>1</i><div><strong>Bhubaneswar</strong><small>Start by flight or train depending on group preference.</small></div></div><div class="route-stop"><i>2</i><div><strong>Kolkata connection</strong><small>Combine a flight with an onward flight or train only with a conservative transfer window.</small></div></div><div class="route-stop"><i>3</i><div><strong>Bagdogra / NJP</strong><small>Arrive at the mountain gateway with enough daylight for the road transfer.</small></div></div></div></div><div class="journey-info"><div class="info-card"><small>GOOD USE CASE</small><strong>Different outbound and return modes</strong><p>Fly in for time efficiency, return by train for a slower finish—or reverse it.</p></div><div class="info-card"><small>AVOID</small><strong>Tight same-day cross-city connections</strong><p>Account for airport processes, Kolkata traffic and possible delays.</p></div><div class="info-card"><small>GROUP COORDINATION</small><strong>Keep all five on one core connection</strong><p>Splitting the group creates unnecessary transfer risk.</p></div></div></div>`,
    return: `<div class="journey-panel"><div class="route-line-card"><div class="route-line"><div class="route-stop"><i>1</i><div><strong>Gangtok / Pelling / Ravangla</strong><small>Departure road time varies materially by final base.</small></div></div><div class="route-stop"><i>2</i><div><strong>Bagdogra / NJP / Siliguri</strong><small>Use a generous flight or train buffer; Pelling requires an earlier start than Gangtok.</small></div></div><div class="route-stop"><i>3</i><div><strong>Bhubaneswar</strong><small>Book the onward connection only after factoring in mountain-road uncertainty.</small></div></div></div></div><div class="journey-info"><div class="info-card"><small>FROM LACHUNG</small><strong>Do not plan a tight same-day flight</strong><p>An intermediate night in Gangtok or near the gateway is often the safer choice.</p></div><div class="info-card"><small>FROM PELLING</small><strong>Allow roughly 5.5–7 road hours</strong><p>Early-morning connections are usually impractical without a gateway night.</p></div><div class="info-card"><small>SAFETY BUFFER</small><strong>Road delay comes before airline rules</strong><p>Landslides, roadworks and traffic can change the best-case estimate.</p></div></div></div>`
  };
  function renderJourney(tab='flight') { $('#journeyContent').innerHTML = JOURNEY_CONTENT[tab]; }

  const TRANSPORT = {
    private: { title:'A private SUV keeps the group together.', copy:'Ask for a 6/7-seater SUV or premium MPV with a professional local driver. Vehicle examples are indicative only; a specific model should never be guaranteed.', cards:[['Comfort','Five travellers stay together with planned breaks.'],['Luggage','Confirm boot space and roof-carrier arrangement in advance.'],['Flexibility','Photo, meal and washroom stops can be adjusted responsibly.'],['Mountain suitability','A local driver understands route controls, weather and road rhythm.'],['Privacy','Useful on long transfer days and early high-altitude departures.'],['Door-to-door','Hotel pickup avoids repeated stand changes and luggage handling.']] },
    shared: { title:'Shared transport works selectively—not everywhere.', copy:'Shared taxis and jeeps connect gateways and major towns. Remote protected circuits, luggage-heavy days and tightly scheduled sightseeing are less suitable.', cards:[['Major towns','Shared jeeps may serve Gangtok, Namchi, Pelling and other hubs.'],['Fixed points','Departures often use designated stands rather than hotel pickup.'],['Luggage limits','Five people with winter luggage may need separate planning.'],['Reduced flexibility','Unplanned photo and washroom stops may not be possible.'],['Protected circuits','North Sikkim and border routes can require registered local arrangements.'],['Public buses','SNT services exist on selected routes, not every tourist destination.']] }
  };
  function renderTransport(type='private') { const t=TRANSPORT[type]; $('#transportContent').innerHTML=`<div class="transport-panel"><div class="vehicle-visual"><h3>${t.title}</h3><p>${t.copy}</p><div class="vehicle-svg"></div></div><div class="transport-matrix">${t.cards.map(c=>`<article class="matrix-card"><span>✦</span><h4>${c[0]}</h4><p>${c[1]}</p></article>`).join('')}</div></div>`; }

  function renderNationality(type='indian') {
    const copy = {
      indian:'For the current group of five Indian adults, carry original government photo ID and clear copies. Protected circuits are commonly processed through registered local operators using local vehicles. Approval remains discretionary.',
      foreign:'Foreign-national access can differ substantially by location and nationality. Some sensitive routes may be restricted or unavailable. Verify current Restricted / Protected Area Permit rules only through official channels and a registered operator.',
      mixed:'Treat the entire route according to the most restrictive traveller requirement. A place open to Indian citizens may not be open to every foreign national in the group.'
    };
    $('#nationalityCopy').innerHTML = `<p>${copy[type]}</p><p><strong>Always verify:</strong> identity document rules, photographs, lead time, permitted route, registered vehicle requirement and current road access.</p>`;
  }

  function renderSeason() {
    const s=SEASONAL[state.month];
    $('#monthNumber').textContent = state.month==='October'?'10':'11'; $('#monthLabel').textContent=state.month.toUpperCase();
    $('#seasonCopy').innerHTML = `<div class="season-facts"><div class="season-fact"><small>SEASON CHARACTER</small><strong>${s.badge}</strong></div><div class="season-fact"><small>TEMPERATURE GUIDANCE</small><strong>${s.temperatures}</strong></div><div class="season-fact"><small>DAYLIGHT</small><strong>${s.daylight}</strong></div><div class="season-fact"><small>WHAT TO WEAR</small><strong>${s.clothing}</strong></div><div class="season-fact"><small>PLANNING NOTE</small><strong>${s.note}</strong></div><div class="season-fact"><small>EARLY START</small><strong>${s.departure}</strong></div></div>`;
    $$('.season-toggle button').forEach(b=>b.classList.toggle('active',b.dataset.month===state.month));
  }

  function renderPacking() {
    $('#packingList').innerHTML = PACKING.map((p,idx)=>`<label class="packing-item"><input type="checkbox" data-packing="${idx}" ${state.packing.includes(idx)?'checked':''}><span>${p}</span></label>`).join('');
    const pct=Math.round(state.packing.length/PACKING.length*100); $('#packingProgress').textContent=`${pct}%`; $('#packingBar').style.width=`${pct}%`;
  }

  function updateSavedCount() { $('#savedCountBadge').textContent = state.savedDays.length + state.savedDestinations.length; }

  function renderTripDashboard() {
    const days = state.savedDays.map(key=>{ const [id,day]=key.split('-'); const i=ITINERARIES.find(x=>x.id===id); const d=i?.days.find(x=>x.day==day); return d?{key,label:`${i.duration} · Day ${d.day}: ${d.title}`} : null; }).filter(Boolean);
    const dests = state.savedDestinations.map(id=>DESTINATIONS.find(d=>d.id===id)).filter(Boolean);
    $('#tripDashboard').innerHTML = `<div class="trip-dashboard-grid"><div class="dashboard-panel"><h3>Selected journey</h3><div class="saved-chip"><span><strong>${activeItinerary().name}</strong><br>${activeItinerary().duration} · ${activeItinerary().coverage}</span></div><h3 style="margin-top:20px">Five travellers</h3><div class="travellers"><span class="traveller-card">Traveller 1 · Woman</span><span class="traveller-card">Traveller 2 · Woman</span><span class="traveller-card">Traveller 3 · Woman</span><span class="traveller-card">Traveller 4 · Man</span><span class="traveller-card">Traveller 5 · Man</span></div><h3 style="margin-top:20px">Saved days</h3>${days.length?days.map(x=>`<div class="saved-chip"><span>${x.label}</span><button data-remove-day="${x.key}">Remove</button></div>`).join(''):'<div class="empty-state">No saved days yet.</div>'}</div><div><div class="dashboard-panel"><h3>Saved destinations</h3>${dests.length?dests.map(d=>`<div class="saved-chip"><span>${d.name}<br><small>${d.region}</small></span><button data-remove-destination="${d.id}">Remove</button></div>`).join(''):'<div class="empty-state">No saved destinations yet.</div>'}</div><div class="dashboard-panel" style="margin-top:18px"><h3>Document readiness</h3><p class="empty-state">${state.packing.filter(i=>i<2).length}/2 identity-document items checked · ${state.packing.length}/${PACKING.length} packing items ready.</p><div class="dashboard-actions"><button class="pill-btn small" id="shareTrip">Share plan</button><button class="ghost-btn" id="printTrip">Download / print PDF</button></div></div></div></div>`;
  }

  function bindEvents() {
    window.addEventListener('scroll',()=>$('#topbar').classList.toggle('scrolled',scrollY>40));
    document.addEventListener('click', e => {
      const t=e.target.closest('button,a'); if(!t) return;
      if(t.dataset.itinerary) setActiveItinerary(t.dataset.itinerary);
      if(t.dataset.view) setActiveItinerary(t.dataset.view,true);
      if(t.dataset.select) setActiveItinerary(t.dataset.select);
      if(t.dataset.detailTab) setActiveItinerary(t.dataset.detailTab);
      if(t.dataset.compare){ const id=t.dataset.compare; state.compare=state.compare.includes(id)?state.compare.filter(x=>x!==id):[...state.compare,id]; save();renderItineraryCards(); }
      if(t.id==='openCompare'){ renderCompare(); $('#compareDialog').showModal(); }
      if(t.dataset.closeDialog!==undefined) t.closest('dialog').close();
      if(t.dataset.openDay){ const card=t.closest('.day-card'); $$('.day-card').forEach(c=>c.classList.toggle('open',c===card? !c.classList.contains('open') : false)); const d=activeItinerary().days.find(x=>x.day==t.dataset.openDay); updateMap(d); }
      if(t.dataset.saveDay){ const key=`${state.activeItinerary}-${t.dataset.saveDay}`; state.savedDays=state.savedDays.includes(key)?state.savedDays.filter(x=>x!==key):[...state.savedDays,key]; save();renderTimeline(); }
      if(t.dataset.swapDay){ const d=activeItinerary().days.find(x=>x.day==t.dataset.swapDay); alert(`Swap suggestion for Day ${d.day}: ${d.backup}`); }
      if(t.dataset.saveDestination){ const id=t.dataset.saveDestination; state.savedDestinations=state.savedDestinations.includes(id)?state.savedDestinations.filter(x=>x!==id):[...state.savedDestinations,id]; save();renderDestinations(); }
      if(t.dataset.vote){ const id=t.dataset.vote; state.votes[id]=(state.votes[id]||0)+1; save();renderDestinations(); }
      if(t.id==='loadMoreDestinations'){ state.destinationLimit+=9; renderDestinations(); }
      if(t.dataset.journeyTab){ $$('.journey-tabs button').forEach(b=>b.classList.toggle('active',b===t)); renderJourney(t.dataset.journeyTab); }
      if(t.dataset.transport){ $$('.transport-toggle button').forEach(b=>b.classList.toggle('active',b===t)); renderTransport(t.dataset.transport); }
      if(t.dataset.nationality){ $$('#nationalitySelector button').forEach(b=>b.classList.toggle('active',b===t)); renderNationality(t.dataset.nationality); }
      if(t.dataset.month){ state.month=t.dataset.month; save();renderSeason(); }
      if(t.dataset.openTrip!==undefined){ renderTripDashboard(); $('#tripDialog').showModal(); }
      if(t.dataset.removeDay){ state.savedDays=state.savedDays.filter(x=>x!==t.dataset.removeDay); save();renderTripDashboard();renderTimeline(); }
      if(t.dataset.removeDestination){ state.savedDestinations=state.savedDestinations.filter(x=>x!==t.dataset.removeDestination); save();renderTripDashboard();renderDestinations(); }
      if(t.id==='printTrip') window.print();
      if(t.id==='shareTrip') shareTrip();
      if(t.id==='themeToggle'){ const dark=document.documentElement.dataset.theme!=='dark'; document.documentElement.dataset.theme=dark?'dark':'light'; localStorage.setItem('theme',dark?'dark':'light'); t.textContent=dark?'☀':'☾'; }
    });
    document.addEventListener('change', e=>{ if(e.target.matches('[data-packing]')){ const idx=Number(e.target.dataset.packing); state.packing=e.target.checked?[...new Set([...state.packing,idx])]:state.packing.filter(x=>x!==idx);save();renderPacking(); } });
    ['destinationSearch','regionFilter','permitFilter'].forEach(id=>$('#'+id).addEventListener(id==='destinationSearch'?'input':'change',()=>{state.destinationLimit=9;renderDestinations();}));
  }

  async function shareTrip(){ const text=`Sikkim group plan: ${activeItinerary().name} (${activeItinerary().duration}). ${state.savedDays.length} saved days and ${state.savedDestinations.length} saved destinations.`; try{ if(navigator.share) await navigator.share({title:'Our Sikkim Journey',text,url:location.href}); else {await navigator.clipboard.writeText(`${text}\n${location.href}`); alert('Trip summary copied to clipboard.');}}catch{} }

  function init() {
    document.documentElement.dataset.theme=localStorage.getItem('theme')||'light'; $('#themeToggle').textContent=document.documentElement.dataset.theme==='dark'?'☀':'☾';
    fillRegions(); renderItineraryCards(); renderTimeline(); renderDestinations(); renderJourney(); renderTransport(); renderNationality(); renderSeason(); renderPacking(); updateSavedCount(); bindEvents();
  }
  init();
})();
