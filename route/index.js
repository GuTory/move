const renderMW = require("../middleware/common/render")
const requireOptionsMW = require("../middleware/common/requireOption")
const getWorkoutsMW = require("../middleware/workout/getWorkouts")
const removeWorkoutMW = require("../middleware/workout/removeWorkout")
const saveWorkoutMW = require("../middleware/workout/saveWorkout")
const updateWorkoutMW = require("../middleware/workout/updateWorkout")

const getExercisesMW = require("../middleware/exercise/getExercises")
const removeExerciseMW = require("../middleware/exercise/removeExercise")
const updateExerciseMW = require("../middleware/exercise/updateExercise")
const saveExerciseMW = require("../middleware/exercise/saveExercise")
const addExerciseToWorkoutMW = require("../middleware/exercise/addExerciseToWorkout")
const removeExerciseFromWorkoutMW = require("../middleware/exercise/removeExerciseFromWorkout")

module.exports = function (app) {
    const objRepo = {};

    app.use('/new',
        saveWorkoutMW(objRepo),
        renderMW(objRepo));
    app.post('/update/:workoutid',
        getWorkoutsMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo));
    app.post('/update/:workoutid/new',
        getWorkoutsMW(objRepo),
        addExerciseToWorkoutMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo));
    app.post('/update/:workoutid/remove/:exerciseid',
        getWorkoutsMW(objRepo),
        removeExerciseFromWorkoutMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo));
    app.post('/remove/:workoutid',
        getWorkoutsMW(objRepo),
        removeWorkoutMW(objRepo),
        renderMW(objRepo));
    app.get('/exercises',
        getExercisesMW(objRepo),
        renderMW(objRepo));
    app.use('/exercises/new',
        saveExerciseMW(objRepo),
        renderMW(objRepo));
    app.use('/exercises/update/:exerciseid',
        getExercisesMW(objRepo),
        updateExerciseMW(objRepo),
        renderMW(objRepo));
    app.use('/exercises/remove/:exerciseid',
        getExercisesMW(objRepo),
        removeExerciseMW(objRepo),
        renderMW(objRepo));
    app.get('/',
        getWorkoutsMW(objRepo),
        renderMW(objRepo));
};