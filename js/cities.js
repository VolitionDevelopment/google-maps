var app = angular.module('citiesApp', []);
app.controller('citiesCtrl', function($scope){
	var apiKey = "AIzaSyDbHVVTdxBf2MaVVRS3_I_hKP-5GUkstes";		
	$scope.cities = cities;

	var myLatLng = {lat: 40.6643, lng: -73.9385};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 8	
	});

	var markers = [];

	function createMarker(city){
		var marker = new google.maps.Marker({
			position: {lat: city.lat, lng: city.lon},
		    	map: map,
		    	title: city.city
		});

		var infowindow = new google.maps.InfoWindow({
			content: city.city
		});

		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map, marker);	
		});

		markers.push(marker);
	}

	for(var i = 0; i < cities.length; i++){
	       createMarker(cities[i]);
	}

	$scope.triggerClick = function(index){
		google.maps.event.trigger(markers[index], "click");
	}	
});
