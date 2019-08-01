'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

  User.init ({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    logged_in: DataTypes.BOOLEAN
  }, {
    sequelize, modelName: "User"
  });

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Product, {through: models.UserOrder})
  };
  return User;
};
