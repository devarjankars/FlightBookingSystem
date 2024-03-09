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
     * 
     * 
    */

    await queryInterface.bulkInsert('airpots',[
      {
        name:"Chhatrapati Shivaji Maharaj International Airport",
        address:"Vile Parle, Mumbai",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Juhu Airport",
        address:"Juhu, Mumbai",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"DB Patil International Airport",
        address:"Navi Mumbai",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Dabolim Airport",
        address:"panji",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      {
        name:"Indira Gandhi International Airport",
        address:"New Delhi",
        cityId: 2,
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
