var devMountIn = angular.module('devMtnSocial', ['ui.router']);

devMountIn.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/home',
      templateurl: './views/entry.html'
    })

    .state('home.view-friends', {
        url: '/viewfriends',
        templateurl: 'viewfriends.html'
    })

    .state('home.find-friends', {
        url: '/findfriends',
        templateurl: 'findfriends.html'
    })

    .state('home.update-profile', {
        url: '/updateprofile',
        templateurl: './views/updateprofile.html'
    });



});
