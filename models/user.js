'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    logged_in: DataTypes.BOOLEAN
  }, {});

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Product, {through: models.UserOrder})
    User.belongsToMany(models.Product, {through: models.Cart})
  };
  return User;
};
