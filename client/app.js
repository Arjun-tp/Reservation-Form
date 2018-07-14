'use strict';

var App = angular.module('timeSheetApp',['ui.router','appIndex']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/app/home");
				
				$stateProvider
                    .state('app', {
                        url: "/app",
                        abstract: true
                    })
			}]);
