var app = angular.module('citiesApp', []);
app.controller('citiesCtrl', function($scope){
	var apiKey = "AIzaSyDbHVVTdxBf2MaVVRS3_I_hKP-5GUkstes";		
	$scope.cities = cities;

	var myLatLng = {lat: 40.6643, lng: -73.9385};
	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 3	
	});

	var markers = [];	

	function createMarker(city){
		var icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFE7569';
		
		if(city.yearRank == 1){
			icon = 'img/1.png';
		}else if(city.yearRank == 39){
			icon = 'img/atl.png';
		}

		var marker = new google.maps.Marker({
			position: {lat: city.lat, lng: city.lon},
		    	map: map,
		    	title: city.city,
		    	icon: icon
		});

		var infowindow = new google.maps.InfoWindow({
			content: city.city
		});

		google.maps.event.addListener(marker, 'click', function(){
			infowindow.open(map, marker);	
		});

		markers.push(marker);
	}

	for(var i = 0; i < $scope.cities.length; i++){
	       createMarker($scope.cities[i]);
	}

	$scope.triggerClick = function(index){
		google.maps.event.trigger(markers[index], "click");
		map.setCenter(markers[index].position);
	}

	$scope.updateMarkers = function(){
		for(var i = 0; i < markers.length; i++){
			markers[i].setMap(null);
		}

		for(var i = 0; i < $scope.filteredCities.length; i++){
			createMarker($scope.filteredCities[i]);
		}
	}

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	directionsDisplay.setMap(map);
		directionsService.route({
		origin: 'Atlanta, GA',
		destination: 'New York, NY',
		travelMode: 'DRIVING'
	}, function(response, status){
		if(status === 'OK'){
			directionsDisplay.setDirections(response);
		}else{
			alert("Failed due to " + status);
		}
	});		
});
