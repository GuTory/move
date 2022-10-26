/**
 *  edzések lekérése az adatbázisból
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {
        

        res.locals.workouts = {
            data:
                [
                    {
                        name: 'Push Day',
                        start_time: '2012-01-26 10:00:00',
                        finish_time: '2012-01-26 12:00:00',
                        weight: 95.1,
                        notes: 'LIGHTWEIGHT BABY',
                        exercises:
                            [
                                {
                                    name: 'Bench Press',
                                    sets:
                                        [
                                            {
                                                weight: 10,
                                                reps: 20
                                            },
                                            {
                                                weight: 20,
                                                reps: 10
                                            }
                                        ]
                                },
                                {
                                    name: 'Dips',
                                    sets:
                                        [
                                            {
                                                weight: 0,
                                                reps: 20
                                            },
                                            {
                                                weight: 50,
                                                reps: 5
                                            }
                                        ]
                                },
                            ]
                    },
                    {
                        name: 'Pull Day',
                        start_time: '2012-01-26 12:00:00',
                        finish_time: '2012-01-26 12:00:00',
                        weight: 95.1,
                        notes: 'AIN\'t nuttin with a peanut',
                        exercises:
                            [
                                {
                                    name: 'Cable Row',
                                    sets:
                                        [
                                            {
                                                weight: 10,
                                                reps: 20
                                            },
                                            {
                                                weight: 20,
                                                reps: 10
                                            }
                                        ]
                                },
                                {
                                    name: 'Pull Ups',
                                    sets:
                                        [
                                            {
                                                weight: 0,
                                                reps: 20
                                            },
                                            {
                                                weight: 50,
                                                reps: 5
                                            }
                                        ]
                                }
                            ]
                    }
                ]
        }
        console.log(res.locals.workouts);
        return next();
    }
}