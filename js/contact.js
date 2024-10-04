// MAPBOX

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWJpZXJoYWxzIiwiYSI6ImNtMXUzN3pwbDA5OXUybW9sbHZ1OTNodHIifQ.PxCga4Sk5mjlB3_uvBCNnQ';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-52.3030528, -31.7520277],
    zoom: 14
});

new mapboxgl.Marker({ color: 'orange' })
    .setLngLat([-52.3030528, -31.7520277])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Instituto de Menores Dom Antônio Zattera</h3><p>Pelotas, RS</p>'))
    .addTo(map)
    .togglePopup();