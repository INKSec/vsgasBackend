module.exports = (sequelize, Sequelize) => {
    const Measurements = sequelize.define("measurements", {
      deviceName: {
        type: Sequelize.STRING
      }
    });
    return Measurements;
  };