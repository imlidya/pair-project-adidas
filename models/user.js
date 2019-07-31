'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model {}

  User.init ({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    logged_in: {
      type: DataTypes.BOOLEAN, defaultValue: false
    }
  }, {
    sequelize, modelName: "User"
  });

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
