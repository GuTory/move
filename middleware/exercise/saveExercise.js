/**
 * új gyakorlat mentése az adatbázisba
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    const ExerciseModel = requireOption(objectrepository, 'ExerciseModel');

    return function (req, res, next) {
        if (typeof req.body.name === undefined || req.body.type === undefined ||
            req.body.name === '' || req.body.type === '') {
            if (res.locals.searchedexercise === undefined) {
                res.locals.searchedexercise = [];
            }
            return next();
        }
        if (res.locals.searchedexercise !== undefined) {
            console.log("path2");
            ExerciseModel.updateOne({_id: res.locals.searchedexercise[0]._id},
                {name: req.body.name, type: req.body.type},
                (err) => {
                    if (err) {
                        return next(err);
                    }
                    console.log("update happened");
                    return next();
                });
        } else {
            console.log("path3");
            let newex = new ExerciseModel({
                name: req.body.name,
                type: req.body.type
            });
            newex.save((err) => {
                console.log(err);
            })
            if (req.method === 'POST')
                res.redirect("/exercises");
            return next();
        }
    }
}