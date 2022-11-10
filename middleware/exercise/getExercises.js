/**
 * gyakorlatok lekérése az adatbázisból, és átrendezése típus szerint
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const ExerciseModel = requireOption(objectrepository, 'ExerciseModel');

    return function (req, res, next) {

        ExerciseModel.find({}, (err, exercises) => {
            if (err) {
                return next(err);
            }
            let mapped = [];
            exercises.forEach(e => {
                if (!mapped.map(a => a.type).includes(e.type)) {
                    let temp = {
                        type: e.type,
                        name: []
                    };
                    temp.name.push(
                        {
                            name: e.name,
                            id: e._id
                        });
                    mapped.push(temp);
                } else {
                    mapped.find(exercise => exercise.type === e.type)
                        .name.push(
                        {
                            name: e.name,
                            id: e._id
                        });
                }
            });
            res.locals.exercises = mapped;
            return next();
        });
    }
}