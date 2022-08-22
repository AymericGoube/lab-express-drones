// Iteration #1
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  propellers: {
    type: Schema.Types.Number,
  },
  maxSpeed: {
    type: Schema.Types.Number,
  },
});

const Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
