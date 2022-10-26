/**
 * gyakorlatok lekérése az adatbázisból
 */
const requireOption = require('../common/requireOption');

module.exports = function (objectrepository) {

    return function (req, res, next) {

        //mockolt getter
        res.locals.exercises = {
            data:
                [
                    {
                        type: "Abs",
                        name: ["Crunch", "Leg Raises", "Machine Rotation"]
                    },
                    {
                        type: "Back",
                        name: ["Chin-up", "Face Pull", "Cable Row"]
                    },
                    {
                        type: "Biceps",
                        name: ["Incline Dumbbell Curl", "Hammer Curl", "Machine Curl"]
                    },
                    {
                        type: "Chest",
                        name: ["Barbell Bench Press", "Chest Fly", "Pec Deck"]
                    }
                ]
        };
        return next();
    }
}