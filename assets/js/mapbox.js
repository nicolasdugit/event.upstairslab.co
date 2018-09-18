  var upstairsLab = [102.6216070, 17.9386939];

  mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xhc2R1cXVlc25lIiwiYSI6ImNqaTMyejI3ejE2dnUzdmxrdXBpMW5tM3MifQ.qeLFoY_OigVRg_GY5mul7A';
  var map_box = new mapboxgl.Map({
    container: 'map_box',
    center: upstairsLab,
    zoom: 17,
    style: 'mapbox://styles/mapbox/streets-v10'
  });

  var marker = new mapboxgl.Marker()
  .setLngLat(upstairsLab)
  .addTo(map_box);