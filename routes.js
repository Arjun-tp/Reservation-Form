'use strict';
// var app = require('./server');
var requireDir = require('require-dir');
var controllers = requireDir('./server/api');

	


module.exports.register = function(router) {
    // router.route( '/employeeCreateCollectionApi' ).post(controllers.employee.employeeCreateCollectionApi);
    router.route( '/reservationDataInsert' ).post(controllers.reservation.reservationDataInsert);
    router.route( '/getReservationDataAll' ).get(controllers.reservation.getReservationDataAll);
    router.route( '/removeReservationData' ).post(controllers.reservation.removeReservationData);
    router.route( '/updateReservationData' ).put(controllers.reservation.updateReservationData);

    console.log('routes registered ..!!');
};	
