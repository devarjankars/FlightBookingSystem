'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplains',[
      {
        modelNo:"The Airbus A380",
        capcity:60,
        price:1999,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNo:"The Boeing 727",
        capcity:80,
        price:2999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNo:"The Vickers VC10",
        capcity:70,
        price:1999,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNo:"The Avro Canada C102 Jetliner",
        capcity:90,
        Price:5999,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
