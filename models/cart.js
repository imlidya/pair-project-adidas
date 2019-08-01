'use strict';
module.exports = (sequelize, DataTypes) => {

  class Cart extends sequelize.Sequelize.Model{}

  Cart.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize, modelName: "Cart"
  })
  
  Cart.associate = function(models) {
    // associations can be defined here
  };
  return Cart;
};
