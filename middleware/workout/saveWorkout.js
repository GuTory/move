/**
 * új edzés mentése az adatbázisba
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository){

    const WorkoutModel = requireOption(objectrepository, 'WorkoutModel');

    return function (req, res, next){

        if(req.body.name === undefined )
            return next();

        let newwo = new WorkoutModel({
            name: req.body.name,
            start_time: req.body.start_time,
            finish_time: req.body.finish_time,
            weight: req.body.weight,
            notes: req.body.notes,
        });
        newwo.save((err) => {
            console.log(err);
        })
        return next();
    }
}