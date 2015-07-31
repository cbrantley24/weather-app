/**
 * Configure the Routes
 */

'use strict';

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    // Login
    .when("/", {
        templateUrl: "app/view/main/homeView.html", 
        controller: "mainCtrl"
    })
    .when("/weather/:location/", {
        templateUrl: "app/view/main/weatherView.html", 
        controller: "mainCtrl"
    })
    // Default 404
    .otherwise({
        templateUrl: "app/view/main/notFoundView.html", 
        controller: "mainCtrl"
    });

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
});