var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Exercise = db.model('Exercise',
    {
        type: String,
        name: String,

        _workouts: [{
            type: Schema.Types.ObjectId,
            ref: 'Workout'
        }]
    });

module.exports = Exercise;