
angular.module('appMain',['appMainCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            controller: 'HelloWordCtrl',
            templateUrl: "main/templates/main.html"
        })
        .state('app.reserve', {
            url: "/reserve",
            controller: 'reserveController',
            templateUrl: "reserve/templates/reserve.html"
        })
        
});
	