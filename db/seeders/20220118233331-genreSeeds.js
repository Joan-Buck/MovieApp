'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Genres', [
    {
      name: 'Comedy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Horror',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Crime',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Drama',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
