const workoutmodel = require('./models/workout');
const exmodel = require('./models/exercise');

/*
let ex =
    [
        {
            type: "Abs",
            name: "Crunch"
        },
        {
            type: "Abs",
            name:  "Leg Raises"
        },
        {
            type: "Abs",
            name: "Machine Rotation"
        },
        {
            type: "Back",
            name: "Chin-up"
        },
        {
            type: "Back",
            name: "Face Pull"
        },
        {
            type: "Back",
            name: "Cable Row"
        }
    ]
ex.forEach(e => {
    let mod = new exmodel();
    mod.type = e.type;
    mod.name = e.name;

    mod.save((err) => {
        console.log(err);
    })
});
*/

let wo = [
    {
        name: 'Push Day',
        start_time: '2012-01-26 10:00:00',
        finish_time: '2012-01-26 12:00:00',
        weight: 95.1,
        notes: 'LIGHTWEIGHT BABY',
    },
    {
        name: 'Pull Day',
        start_time: '2012-01-26 12:00:00',
        finish_time: '2012-01-26 12:00:00',
        weight: 95.1,
        notes: 'AIN\'t nuttin with a peanut',
    }
];

wo.forEach(w => {
    let mod = new workoutmodel();
    mod.name = w.name;
    mod.start_time = w.start_time;
    mod.finish_time = w.finish_time;
    mod.weight = w.weight;
    mod.notes = w.notes;
    mod.exercises = [];

    mod.save((err) => {
        console.log(err);
    })
});