var map
document.addEventListener('DOMContentLoaded', function(event) {
    // Markers
    map = new GMaps({
        div: '#gmaps-markers',
        lat: 38.5719035,
        lng: -1.6693616,
        mapTypeControl: false,
        navigationControl: false,
        streetViewControl: false,
        disableDefaultUI: true,
        zoom: 7,
    })
    map.addMarker({
        lat: 36.295978,
        lng: -5.459533,
        title: 'Gibraltar',
        icon: '/assets/images/map_pin.svg',
        click: function(e) {
            if (console.log) console.log(e)
            alert('You clicked in this marker')
        },
    })
    map.addMarker({
        lat: 39.700959,
        lng: -0.411427,
        title: 'Valencia',
        icon: '/assets/images/map_pin.svg',
        click: function(e) {
            if (console.log) console.log(e)
            alert('You clicked in this marker')
        },
    })
    map.addMarker({
        lat: 41.189098,
        lng: -5.717823,
        title: 'Getafe',
        icon: '/assets/images/map_pin.svg',
        click: function(e) {
            if (console.log) console.log(e)
            alert('You clicked in this marker')
        },
    })
    map.addMarker({
        lat: 39.029965,
        lng: -1.828663,
        title: 'Albacete',
        icon: '/assets/images/map_pin.svg',
        click: function(e) {
            if (console.log) console.log(e)
            alert('You clicked in this marker')
        },
    })
    map.addMarker({
        lat: 40.507645,
        lng: -1.136525,
        title: 'Teruel',
        icon: '/assets/images/map_pin.svg',
        click: function(e) {
            if (console.log) console.log(e)
            alert('You clicked in this marker')
        },
    })
    map.addMarker({
            lat: 38.102258,
            lng: -4.838917,
            title: 'Cordoba',
            icon: '/assets/images/map_pin.svg',
            click: function(e) {
                if (console.log) console.log(e)
                alert('You clicked in this marker')
            },
        })
        //Map type
    map.addMapType('osm', {
        getTileUrl: function(coord, zoom) {
            return 'https://a.tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png'
        },
        tileSize: new google.maps.Size(256, 256),
        name: 'OpenStreetMap',
        maxZoom: 25,
    })
    map.setMapTypeId('osm')
})