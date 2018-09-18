  var upstairsLab = [102.6216070, 17.9386939]
  var laoitdev = [102.625121, 17.934687]

  mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xhc2R1cXVlc25lIiwiYSI6ImNqbTc3enk3ajQ1ejAzcGxpdW9xaGdxZGQifQ.A4Z8N0v-t3TurNZmIgTmHA';
  var map_box = new mapboxgl.Map({
    container: 'map_box',
    center: laoitdev,
    zoom: 17,
    style: 'mapbox://styles/mapbox/streets-v10'
  });

  var marker = new mapboxgl.Marker()
  .setLngLat(laoitdev)
  .addTo(map_box);