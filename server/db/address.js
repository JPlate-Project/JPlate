const Sequelize = require('sequelize');
const db = require('./db ');

const Address = db.define('address', {
  id : {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Address;