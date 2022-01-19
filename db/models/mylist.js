'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyList = sequelize.define('MyList', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  MyList.associate = function(models) {
    // associations can be defined here
    MyList.belongsTo(models.User, {foreignKey: 'userId'});
    MyList.belongsToMany(models.Movie, {through: 'MovieList', otherKey: 'movieId', foreignKey: 'myListId'})
  };
  return MyList;
};
