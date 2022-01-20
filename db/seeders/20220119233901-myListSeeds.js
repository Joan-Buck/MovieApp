'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      Example:
      return queryInterface.bulkInsert('MyLists', [
        
      {
        userId: 1,
        name: "My Fave Romance Comedies"
      }


    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('MyLists', null, {});
  }
};
