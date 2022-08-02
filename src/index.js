const express = require("express"); 
const bodyParser = require("body-parser");

const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express(); 
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});


// Chances are high that have we to implement CRUD endpoints for the records as well, because records should be added, 
// updated or deleted in the future as well. But this won't be the primary task for now.
// We'll also need a record router to catch the specific requests for the records, but we don't need it right now. 
// This could be a great chance for you to implement the CRUD operations for the records with their own routes and train a bit.

// Of course, this only works if we can handle requests to "/members/:memberId"