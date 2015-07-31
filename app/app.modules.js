/**
 * Module & Controllers
 */

'use strict';

var app = angular.module('app', ['app.services', 'ngRoute', 'ngAnimate', 'ngSanitize']);

/* Main Controller
======================= */
app.controller('mainCtrl', function (api, $scope, $http, $location, $routeParams) {

	// Set global scope variables
	$scope.location = "";
	$scope.weather = "";
	$scope.forecastDays = [1, 2, 3, 4];

	// Format location and redirect to weather page
	$scope.searchLoc = function (location) {
		// Format location
		location = location.toLowerCase().replace(/[^a-z_]/g, '_');
		// Redirect to weather page
		$location.path("/weather/" + location);
	}

	// Search location and return weather results
	$scope.getWeather = function () {
		// Get state by geo location
		var location = $routeParams.location;
		api.geo(location).success(function (data) {
			// Set state
			var state = data.results[0].address_components[2].short_name;
			// Get full weather report with state and city
			api.get(state + "/" + location + ".json").success(function (data) {
				// Push weather data to variable
				$scope.weather = data;
				// Get state by geo location
				api.geo(location).success(function (data) {
					// Set state
					var state = data.results[0].address_components[2].short_name;
					// Get full weather report with state and city
					api.forecast(state + "/" + location + ".json").success(function (data) {
						// Push weather data to variable
						$scope.weather.upcoming = data;
						// Hide loading
						$("#loading").hide();
					});
				});
			});
		});
	}

	// Reset all data
	$scope.resetData = function () {
		$scope.location = "";
		$scope.weather = "";
	}

});