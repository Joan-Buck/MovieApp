'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('MyLists', [

      {
        userId: 1,
        name: "My Fave Romance Comedies",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: "Top 5 Movies",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: "Waste of Time",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: "Classic Films",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'Watched',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        name: 'To Watch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'Watched',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        name: 'To Watch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'Watched',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        name: 'To Watch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: 'Watched',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        name: 'To Watch',
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('MyLists', null, {});
  }
};
