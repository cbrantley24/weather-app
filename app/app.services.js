/**
 * Services
 */

'use strict';

var services = angular.module('app.services', []);

services.factory('api', function($http) {
	var weatherApiPath = "http://api.wunderground.com/api/da864ab9abd65a3a/conditions/q/";
	var forecastApiPath = "http://api.wunderground.com/api/da864ab9abd65a3a/forecast/q/";
	var geoApiPath = "http://maps.googleapis.com/maps/api/geocode/json?address=";

	return {
		get: function(action) {
			return $http.get(weatherApiPath + action);
		},
		post: function (action, data) {
			return $http.post(weatherApiPath + action, data);
		},
		geo: function(location) {
			return $http.get(geoApiPath + location);
		},
		forecast: function (location) {
			return $http.get(forecastApiPath + location);
		}
	}

})