'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserOrder = sequelize.define('UserOrder', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  UserOrder.associate = function(models) {
    // associations can be defined here
  };
  return UserOrder;
};