window.addEvent("domready", function() {
    var $ = window.jQuery, apiURL = "https://apis.philadelphiavotes.com/autocomplete/", addressEl = $("#address");
    addressEl.autocomplete({
        source: function(request, callback) {
            var url = apiURL + encodeURIComponent(addressEl.val());
            $.getJSON(url, function(response) {
                if (response.status == "success") {
                    var addresses = $.map(response.data, function(candidate) {
                        return {
                            label: candidate.label
                        };
                    });
                    callback(addresses);
                } else {
                    callback([]);
                }
            });
        },
        select: function(event, ui) {
            addressEl.value = ui.item.value;
            window.location = "index.php?option=com_voterapp&tmpl=component&address=" + encodeURIComponent(ui.item.value);
        }
    });
});
