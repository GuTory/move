/**
 * egy gyakorlat lekérése az adatbázisból, és átrendezése típus szerint
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const ExerciseModel = requireOption(objectrepository, 'ExerciseModel');

    return function (req, res, next) {

        ExerciseModel.find({_id: req.params.exerciseid}, (err, exercise) => {
            if (err) {
                return next(err);
            }
            res.locals.searchedexercise = exercise;
            return next();
        });
    }
}