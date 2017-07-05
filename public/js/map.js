function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 15
    });
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                title:"현재위치"
            });
            marker.setMap(map);
            map.setCenter(pos);
            var circle = new google.maps.Circle({
                strokeColor: '#5677fc',
                strokeOpacity: 0.6,
                strokeWeight: 2,
                fillColor: '#6889ff',
                fillOpacity: 0.35,
                map: map,
                center: pos,
                radius: 1000
            });
        }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        //handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //infoWindow.setPosition(pos);
    //infoWindow.setContent(browserHasGeolocation ?
        //'Error: The Geolocation service failed.' :
        //'Error: Your browser doesn\'t support geolocation.');
}