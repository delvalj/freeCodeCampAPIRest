// In src/index.js 
const express = require("express"); 

const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});


// Seguir desde aca 
// Inside the method createNewWorkout in our workout controller, we can extract the body from the request object, 
// do some validation, and pass it as an argument to our workout service.