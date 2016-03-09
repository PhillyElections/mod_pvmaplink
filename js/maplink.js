var AC = (function() {
  'use strict';
  var outer = {},
    inner = {};

  inner.geolocation = {
    lat: 39.952464,
    lng: -75.1662477
  };

  inner.fillInAddress = function() {
    document.location='/index.php?option=com_voterapp&tmpl=component&address='+encodeURIComponent(document.getElementById('address').value);
  };

  inner.geolocate = function() {
    // set center to city hall
    var circle = new window.google.maps.Circle({
      center: inner.geolocation,
      radius: 15000
    });
    inner.autoComplete.setBounds(circle.getBounds());
  };

  outer.complete = function() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(39.9500, -75.1642),
    zoom: 13  });

    if (typeof inner.autoComplete === 'undefined') {
      inner.autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('address'), {
          types: ['geocode']
        });
      inner.autoComplete.addListener('place_changed', function() {
        inner.fillInAddress();
      });
    }
    if (typeof inner.located || inner.located === false) {
      inner.geolocate();
      inner.located = true;
    }
  };

  outer.init = function() {
    var script = document.createElement('script');
    script.id = '_gmaps';
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback=AC.complete';
    document.body.appendChild(script);
  };

  return outer;
})();
window.addEvent('domready', function() {
  AC.init();
});
