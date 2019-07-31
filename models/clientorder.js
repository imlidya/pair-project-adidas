'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientOrder = sequelize.define('ClientOrder', {
    ClientId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  ClientOrder.associate = function(models) {
    // associations can be defined here
    
  };
  return ClientOrder;
};