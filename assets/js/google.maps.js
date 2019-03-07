function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 50.736129,
            lng: -1.988229
        }
    })

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.51475, lng: -0.14608 }, //London
        { lat: 51.859126, lng: -4.311591 }, //Carmarthen
        { lat: 55.953346, lng: -3.188374 }, //Edinburgh
        { lat: 50.725562, lng: -3.526911 }, //Exeter
        { lat: 52.6286, lng: 1.29227 }, //Norwhich
        { lat: 54.597, lng: -5.9301 },  //Belfast
        { lat: 54.9919, lng: -7.3168 }, //Londonderry

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
