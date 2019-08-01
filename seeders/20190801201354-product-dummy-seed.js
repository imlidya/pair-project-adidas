'use strict';
let data = [
  {name: "NMD_R1 PRIMEKNIT SHOES",price: 120000, createdAt: new Date(), updatedAt: new Date()},
  {name: "NMD_R1 WOMAN SHOES",price: 100000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Woman Crewneck Sweatshirt",price: 40000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Trefoil Plus Tee",price: 50000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Pharrel Williams X Adidas",price: 50000, createdAt: new Date(), updatedAt: new Date()},
  {name: "UltraBoost 19 Shoes",price: 75000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Predator Firm Ground Cleats",price: 100000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Juventus Authentic Jersey",price: 50000, createdAt: new Date(), updatedAt: new Date()},
  {name: "Liverpool Authentic Jersey",price: 50000, createdAt: new Date(), updatedAt: new Date()}
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', data, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', data, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
