'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserOrder extends sequelize.Sequelize.Model{}

  UserOrder.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize, modelName: "UserOrder"
  })
  
  UserOrder.associate = function(models) {
    // associations can be defined here
  };
  return UserOrder;
};
