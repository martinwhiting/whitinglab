(() => {
  const data = window.LIZARD_NETWORK_DATA;
  const nameOf = new Intl.DisplayNames(['en'], {type:'region'});
  const numericToAlpha = Object.fromEntries(Object.entries(data.alphaToNumeric).map(([a,n]) => [String(Number(n)), a]));
  const entries = Object.entries(data.countryData).map(([code, value]) => ({
    code,
    name: nameOf.of(code) || code,
    collaborators: value.collaborators,
    institutions: value.institutions,
    count: value.collaborators.length
  })).sort((a,b) => b.count-a.count || a.name.localeCompare(b.name));
  const byCode = Object.fromEntries(entries.map(x => [x.code, x]));

  document.querySelector('[data-stat="coauthors"]').textContent = data.coauthors.toLocaleString();
  document.querySelector('[data-stat="institutions"]').textContent = data.institutions.toLocaleString();
  document.querySelector('[data-stat="countries"]').textContent = data.countries.toLocaleString();

  const list = document.querySelector('.network-country-list');
  const detail = document.querySelector('.network-country-detail');
  const defaultCountry = byCode.AU || entries[0];

  function showCountry(item) {
    if (!item) return;
    document.querySelectorAll('[data-country]').forEach(el => {
      el.classList.toggle('is-active', el.dataset.country === item.code);
      el.setAttribute('aria-pressed', el.dataset.country === item.code ? 'true' : 'false');
    });
    detail.innerHTML = `
      <div class="network-detail-heading">
        <div><p class="eyebrow">Selected country</p><h2>${item.name}</h2></div>
        <span class="network-count-badge">${item.count} collaborator${item.count===1?'':'s'}</span>
      </div>
      <div class="network-detail-grid">
        <section><h3>Researchers</h3><ol>${item.collaborators.map(c=>`<li><span>${escapeHtml(c.name)}</span><small>${c.works} indexed co-authored work${c.works===1?'':'s'}</small></li>`).join('')}</ol></section>
        <section><h3>Institutions</h3><ul>${item.institutions.map(i=>`<li>${escapeHtml(i)}</li>`).join('')}</ul></section>
      </div>`;
  }
  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }

  list.innerHTML = entries.map(item => `<button type="button" data-country="${item.code}" aria-pressed="false"><span>${item.name}</span><b>${item.count}</b></button>`).join('');
  list.addEventListener('click', e => {
    const button = e.target.closest('[data-country]');
    if (button) showCountry(byCode[button.dataset.country]);
  });

  const width=980, height=500;
  const svg=d3.select('#network-map').attr('viewBox',`0 0 ${width} ${height}`);
  const projection=d3.geoNaturalEarth1().fitSize([width,height],{type:'Sphere'});
  const path=d3.geoPath(projection);
  const max=Math.max(...entries.map(x=>x.count));
  const colour=d3.scaleSequentialLog([1,max],d3.interpolateYlOrRd);
  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world=>{
    const countries=topojson.feature(world,world.objects.countries).features;
    svg.append('path').datum({type:'Sphere'}).attr('class','map-ocean').attr('d',path);
    svg.append('g').selectAll('path').data(countries).join('path')
      .attr('d',path)
      .attr('class',d=>numericToAlpha[String(Number(d.id))]&&byCode[numericToAlpha[String(Number(d.id))]]?'map-country has-data':'map-country')
      .attr('fill',d=>{const item=byCode[numericToAlpha[String(Number(d.id))]];return item?colour(Math.max(1,item.count)):'#f7f4ed';})
      .attr('data-country',d=>numericToAlpha[String(Number(d.id))]||null)
      .attr('tabindex',d=>byCode[numericToAlpha[String(Number(d.id))]]?0:null)
      .attr('role',d=>byCode[numericToAlpha[String(Number(d.id))]]?'button':null)
      .attr('aria-label',d=>{const item=byCode[numericToAlpha[String(Number(d.id))]];return item?`${item.name}: ${item.count} collaborators`:null;})
      .on('click',(e,d)=>showCountry(byCode[numericToAlpha[String(Number(d.id))]]))
      .on('keydown',(e,d)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showCountry(byCode[numericToAlpha[String(Number(d.id))]]);}});
    showCountry(defaultCountry);
  }).catch(()=>{
    document.querySelector('.network-map-status').textContent='The map could not load, but every country remains available in the list.';
    showCountry(defaultCountry);
  });
})();
