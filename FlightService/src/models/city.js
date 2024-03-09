'use strict';
const {
  Model
} = require('sequelize');
const airpot = require('./airpot');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Airpot,{
        foreignKey:'cityId'
      })
    }
  }
  City.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};