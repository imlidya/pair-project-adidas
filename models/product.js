'use strict';
// const Sequelize = require('sequelize')
// const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {

  class Product extends sequelize.Sequelize.Model{}
  Product.init ({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize, modelName: "Product"
  })
  
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.User, {through: models.UserOrder})
    Product.belongsToMany(models.User, {through: models.Cart})
  };
  return Product;
};