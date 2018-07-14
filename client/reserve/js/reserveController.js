'use strict';


angular.module('appReserveCtrl',[])
    .controller('reserveController',function ($scope,$http) {


        $http.get("/api/getReservationDataAll").then(function(data) {
            $scope.reservationData = data;
            console.log("$scope.reservationData---",JSON.stringify($scope.reservationData))
        });

        // $scope.reserveSubmit = function(query){
		// 	var queryParams = {
		// 		"name" : query.name,
		// 		"email" : query.email,
		// 		"number" : query.number,
		// 		"noOfGuests" : query.noOfGuests,
		// 		"reservationTime" : query.reservationTime,
		// 		"comments" : query.comments
		// 	};
        //
    		// $http.post("/api/reservationDataInsert",queryParams).then(function (result) {
		// 		console.log("result");
         //    })
		// };


	})
    	