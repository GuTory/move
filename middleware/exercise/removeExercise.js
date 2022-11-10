/**
 * gyakorlat adatbázisból való törlése
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository){

    const ExerciseModel = requireOption(objectrepository, 'ExerciseModel');

    return function (req, res, next){

        ExerciseModel.deleteOne({_id: req.params.exerciseid}, (err) => {
            if (err) {
                return next(err);
            }
            console.log("We deleted one exercise");
            res.redirect("/exercises");
        });
    }
}