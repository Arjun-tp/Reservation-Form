'use strict';


angular.module('appMainCtrl', [])
    .controller('HelloWordCtrl', function ($scope, $http) {

        $scope.empFunction = function () {
            $http.get("/api/getReservationDataAll").then(function (result) {
                $scope.empdata = result.data;
                console.log("result---", JSON.stringify(result))
            })
        }
        $scope.query = {};

        $scope.empFunction();
        $scope.reserveSubmit = function (query) {
            var queryParams = {};
            if (query) {
                console.log("quewwww", JSON.stringify(query));
                queryParams = {
                    "name": query.name,
                    "email": query.email,
                    "number": query.number,
                    "noOfGuests": query.noOfGuests,
                    "timeOfReservation": query.reservationTime,
                    "comments": query.comment
                };
            }
            $http.post("/api/reservationDataInsert", queryParams).then(function (result) {
                console.log("result", JSON.stringify(result));
                $scope.resultData = result;
            });
            if (query) {
                query.name = '';
                query.email = '';
                query.number = '';
                query.noOfGuests = '';
                query.reservationTime = '';
                query.comment = '';
            }


        };

        $scope.resetAll = function (data) {
            console.log("data", JSON.stringify(data));
            data.name = '';
            data.email = '';
            data.number = '';
            data.noOfGuests = '';
            data.reservationTime = '';
            data.comment = '';
        }

        $scope.editInfo = function (employee) {
            console.log("employe!!!",JSON.stringify(employee));
            var query = {
                _id: employee._id,
                email: employee.email
            };

            $http.put("/api/updateReservationData", query)
                .then(function (result) {
                    console.log("re=============", JSON.stringify(result));
                    $scope.empFunction();
                });
        };

        $scope.removeInfo = function (employee) {
            var query = {
                _id: employee._id
            };
            $http.post("/api/removeReservationData", query)
                .then(function (result) {
                    console.log("re=============", JSON.stringify(result));
                    $scope.empFunction();
                });

            console.log("REMOVE")
        }


    })
    	