'use strict';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    logged_in: DataTypes.BOOLEAN
  }, {});

  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Cart)
    // User.belongsTo(models.Cart)
    User.belongsToMany(models.Product, {through: models.UserOrder})
  };
  return User;
};

