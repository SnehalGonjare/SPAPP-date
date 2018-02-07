var myApp = angular.module('SPApp', ['ui.router', 'ngFileUpload', 'zingchart-angularjs']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        //new state added for Registration page        
        .state('registration', {
            url: '/',
            templateUrl: 'views/registration.html',
            controller: 'registrationCtrl'
        })

        //new state added for home page        
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })

        //new state added for landing page        
        .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html',
            controller: 'landingCtrl'
        })



});

