'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      plot: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      imageLink: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      director: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      movieRating: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      duration: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Genres'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
