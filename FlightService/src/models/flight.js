'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    airplainId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    DeptureAirpotId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    ArrivalAirpotId: {
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    depatureDT: {
      type:DataTypes.DATE,
      allowNull:false
    },
    arrivalDT: {
      type:DataTypes.DATE,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    bordingGate: DataTypes.STRING,
    totalSeats:{
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};