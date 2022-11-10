const renderMW = require("../middleware/common/render");
const requireOptionsMW = require("../middleware/common/requireOption");
const removeWorkoutMW = require("../middleware/workout/removeWorkout");
const saveWorkoutMW = require("../middleware/workout/saveWorkout");
const updateWorkoutMW = require("../middleware/workout/updateWorkout");

const getExercisesMW = require("../middleware/exercise/getExercises");
const getOneExerciseMW = require("../middleware/exercise/getOneExercise");
const getWorkoutsMW = require("../middleware/workout/getWorkouts");
const removeExerciseMW = require("../middleware/exercise/removeExercise");
const getOneWorkoutMW = require("../middleware/workout/getWorkouts"); // TODO
const saveExerciseMW = require("../middleware/exercise/saveExercise");
const addExerciseToWorkoutMW = require("../middleware/exercise/addExerciseToWorkout");
const removeExerciseFromWorkoutMW = require("../middleware/exercise/removeExerciseFromWorkout");

const WorkoutModel = require('../models/workout')
const ExerciseModel = require('../models/exercise')

module.exports = function (app) {
    const objRepo = {
        WorkoutModel: WorkoutModel,
        ExerciseModel: ExerciseModel
    };

    /**
     *
     */
    app.use('/new',
        saveWorkoutMW(objRepo),
        renderMW(objRepo, 'new_workout'));

    /**
     * TODO
     */
    app.post('/update/:workoutid/new',
        getWorkoutsMW(objRepo),
        addExerciseToWorkoutMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo, 'index'));

    /**
     * TODO
     */
    app.post('/update/:workoutid/remove/:exerciseid',
        getWorkoutsMW(objRepo),
        removeExerciseFromWorkoutMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo, 'index'));

    /**
     * TODO
     */
    app.post('/update/:workoutid',
        getWorkoutsMW(objRepo),
        updateWorkoutMW(objRepo),
        renderMW(objRepo, 'new_workout'));

    /**
     * TODO
     */
    app.post('/remove/:workoutid',
        getOneWorkoutMW(objRepo),
        removeWorkoutMW(objRepo),
        renderMW(objRepo, 'index'));

    /**
     * fasza
     */
    app.use('/exercises/new',
        saveExerciseMW(objRepo),
        renderMW(objRepo, 'new_exercise'));

    /**
     * fasza
     */
    app.use('/exercises/update/:exerciseid',
        getOneExerciseMW(objRepo),
        saveExerciseMW(objRepo),
        renderMW(objRepo, 'new_exercise'));

    /**
     * fasza
     */
    app.use('/exercises/remove/:exerciseid',
        getOneExerciseMW(objRepo),
        removeExerciseMW(objRepo),
        renderMW(objRepo, 'exercises'));

    /**
     * fasza
     */
    app.get('/exercises',
        getExercisesMW(objRepo),
        renderMW(objRepo, 'exercises'));

    /**
     * TODO: poszt
     */
    app.get('/',
        getExercisesMW(objRepo),
        getWorkoutsMW(objRepo),
        renderMW(objRepo, 'index'));
};