EventDescriptions = new Mongo.Collection('eventdescriptions');
TeamMembers = new Mongo.Collection('teammembers');




if (Meteor.isClient) {

Template.homePage.rendered = new WOW().init()

Template.eventsPanel.helpers({
eventdescriptions: function(){
  return EventDescriptions.find()
},
eventCount:function(){
	return EventDescriptions.find().count();
},
eventOccur:function(){
	if(EventDescriptions.find().count() > 0){
		return true;
	}
}


});
Template.teamPanel.helpers({

teammembers:function(){
  return TeamMembers.find()
}
});

Meteor.startup(function() {
    GoogleMaps.load();
  });

Template.coffeehouse.helpers({
	exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(43.82268,-79.3280007),
        zoom: 17,
        disableDefaultUI: true,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]
      };
    }
  }
});





}

if (Meteor.isServer) {
Meteor.publish('teammembers', function() {
    return TeamMembers.find();
});
}
