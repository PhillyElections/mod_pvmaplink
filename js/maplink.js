var AC = (function() {
  'use strict';
  var outer = {},
    inner = {};
  // map of data we're going to use
  inner.returnData = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    postal_code: 'short_name'
  };
  // rough center of the city
  inner.geolocation = {
    lat: 39.952464,
    lng: -75.1662477
  };
  // intermediary between return and form
  inner.formData = {};

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
    // Create the inner.autoComplete object, restricting the search to geographical
    // location types.
    // singleton call
    if (typeof inner.autoComplete === 'undefined') {
      inner.autoComplete = new google.maps.places.Autocomplete(
        // @type {!HTMLInputElement} 
        document.getElementById('address'), {
          types: ['geocode']
        });
      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      inner.autoComplete.addListener('place_changed', function() {
        inner.fillInAddress();
      });
    }
    // only set the circle once
    // singleton call
    if (typeof inner.located || inner.located === false) {
      inner.geolocate();
      inner.located = true;
    }
  };

  outer.noComplete = function() {
    this.autoComplete.unbindAll();
    google.maps.event.clearInstanceListeners(document.getElementById('address'));
    inner.located = false;
  };

  // hot init function
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
