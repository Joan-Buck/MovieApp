'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie, {foreignKey: 'movieId'});
    Review.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Review;
};
