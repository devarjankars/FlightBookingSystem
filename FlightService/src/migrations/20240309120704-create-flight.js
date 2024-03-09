'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      airplainId: {
        type: Sequelize.INTEGER
        ,
        allowNull: false,
      },
      DeptureAirpotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ArrivalAirpotId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      depatureDT: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrivalDT: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bordingGate: {
        type: Sequelize.STRING,
        
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull :false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};