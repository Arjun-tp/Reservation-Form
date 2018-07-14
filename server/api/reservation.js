var app = require('../../server');


function reservationDataInsert(req,res) {
    console.log("reqq",JSON.stringify(req.body));
  app.default.models.Reservation.create(req.body, function(err, res) {
    if (err) throw err;
    console.log("document inserted");
  });
}


function getReservationDataAll(req,cb){
 app.default.models.Reservation.find({}).exec(function(err,data){
 	if(!err){
 		// console.log("data",JSON.stringify(data));
 		cb.send(data);
 	}else{
 		cb.send(false);
 	}	
 })
}

function removeReservationData(req,cb){
    console.log("request---------------",JSON.stringify(req.body));
    app.default.models.Reservation.remove({_id : req.body._id}).exec(function(err,data){
        if(!err){
            console.log("data",JSON.stringify(data));
            cb.send(data);
        }else{
            cb.send(false);
        }
    })
}

function updateReservationData(req,cb){
    var query = {
        _id : req.body._id,
        email : req.body.email
    }
    console.log("request---------------",JSON.stringify(req.body));
    app.default.models.Reservation.update(query).exec(function(err,data){
        if(!err){
            console.log("data",JSON.stringify(data));
            cb.send(data);
        }else{
            cb.send(false);
        }
    })
}



// module.exports.employeeCreateCollectionApi = employeeCreateCollectionApi;
module.exports.reservationDataInsert = reservationDataInsert;
module.exports.getReservationDataAll = getReservationDataAll;
module.exports.removeReservationData = removeReservationData;
module.exports.updateReservationData = updateReservationData;
