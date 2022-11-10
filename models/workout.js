var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Workout = db.model('Workout',
    {
        name: String,
        start_time: String,
        finish_time: String,
        weight: Number,
        notes: String,

        exercises: [{
            _id: {
                type: Schema.Types.ObjectId,
                ref: 'Exercise',
            }
        }]
    })
;

module.exports = Workout;