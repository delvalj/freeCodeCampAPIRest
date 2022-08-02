const express = require("express");
const apicache = require("apicache");

const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();

// We can define a new cache by calling apicache.middleware and use it as a middleware inside our get route.
// Inside there you can define how long your data should be cached. I've chosen two minutes.
const cache = apicache.middleware;

router.get("/", cache('2 minutes'), workoutController.getAllWorkouts);

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;