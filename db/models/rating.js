'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
    Rating.belongsTo(models.Movie, {foreignKey: 'movieId'});
    Rating.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Rating;
};
