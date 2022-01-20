'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
    email: 'demo@demo.com',
    username: 'Demo_User',
    hashedPassword: '$2a$12$k3oSPzhGsfWnFEft6En/fOdsED5ALk.soDErF98Id6GqZLbkqQida',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    email: 'demo2@demo.com',
    username: 'Demo_User2',
    hashedPassword: '$2a$12$k3oSPzhGsfWnFEft6En/fOdsED5ALk.soDErF98Id6GqZLbkqQida',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    email: 'demo3@demo.com',
    username: 'Demo_User3',
    hashedPassword: '$2a$12$k3oSPzhGsfWnFEft6En/fOdsED5ALk.soDErF98Id6GqZLbkqQida',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
