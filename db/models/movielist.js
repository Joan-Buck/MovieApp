'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieList = sequelize.define('MovieList', {
    movieId: DataTypes.INTEGER,
    myListId: DataTypes.INTEGER
  }, {});
  MovieList.associate = function(models) {
    // associations can be defined here
  };
  return MovieList;
};
