/**
 *  edzések lekérése az adatbázisból
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const WorkoutModel = requireOption(objectrepository, 'WorkoutModel');

    return function (req, res, next) {

        WorkoutModel.find({}, (err, workouts) => {
            if (err) {
                return next(err);
            }

            res.locals.workouts = workouts;
            return next();
        });
    }
}