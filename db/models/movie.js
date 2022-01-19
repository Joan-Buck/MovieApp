'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    plot: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    director: DataTypes.STRING,
    movieRating: DataTypes.STRING,
    year: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.Genre, {foreignKey: 'genreId'});
    Movie.belongsToMany(models.MyList, {through: 'MovieList', otherKey: 'myListId', foreignKey: 'movieId'});
    Movie.hasMany(models.Rating, {foreignKey: 'movieId'});
    Movie.hasMany(models.Review, {foreignKey: 'movieId'})
  };
  return Movie;
};
