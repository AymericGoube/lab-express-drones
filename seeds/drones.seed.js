// Iteration #1
const mongoose = require("mongoose");
const Drones = require("../models/Drone.model");
const drones = [
  {
    name: "FulguroDrone 3000",
    propellers: 6,
    maxSpeed: 22,
  },
  {
    name: "Nimbus 2000",
    propellers: 1,
    maxSpeed: 40,
  },
  {
    name: "Flashinglight",
    propellers: 4,
    maxSpeed: 18,
  },
];

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    return Drones.deleteMany();
  })
  .then(async () => {
    await Drones.create(drones);
    console.log("drone created");
  })
  .then(async () => {
    await mongoose.disconnect();
    console.log("disconnected");
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
