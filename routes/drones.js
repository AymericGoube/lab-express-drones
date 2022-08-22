const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const everyDrones = await Drone.find();
    res.json({ everyDrones });
  } catch (error) {
    next(error);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const newDrone = req.body;
    console.log("hello", req.body);
    const createNewDrone = await Drone.create({
      name: newDrone.name,
      propellers: newDrone.propellers,
      maxSpeed: newDrone.maxSpeed,
    });
    console.log("drone created", createNewDrone);
    res.status(201).json({ drone: createNewDrone });
  } catch (error) {
    console.log("Error of type", error);
    res.status(400).send(error);
    // next(error);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const newDrone = req.body;
    const drone = await Drone.findByIdAndUpdate(req.params.id, {
      name: newDrone.name,
      propellers: newDrone.propellers,
      maxSpeed: newDrone.maxSpeed,
    });
    console.log("drone updated");
    res.status(200).json({ drone: createNewDrone });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  await Drone.findByIdAndDelete(req.params.id);
  console.log(`Drone with id ${req.params.id} deleted`);
  res.sendStatus(204);
});

module.exports = router;
