
angular.module('appMain',['appReserveCtrl'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.reserve', {
            url: "/reserve",
            controller: 'reserveController',
            templateUrl: "reserve/templates/reserve.html"
        })
});
	