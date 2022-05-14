const db = require("../models");
const Measurement = db.measurements;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.deviceName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Measurement
    const measurement = {
      deviceName: req.body.deviceName    
    };
    // Save Tutorial in the database
    Measurement.create(measurement)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };