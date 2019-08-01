'use strict';
const Cart = require ("/models/cart")
module.exports = (sequelize, DataTypes) => {

  class Cart extends sequelize.Sequelize.Model {
    static associate(models) {
      // associations can be defined here
    }
  };
  Cart.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize
  });
  return Cart;
};