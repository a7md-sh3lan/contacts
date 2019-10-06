const sequelize = require('sequelize');
      db = require("./connection");

const contact = db.define('contact', {
    // attributes
    firstName: {
      type: sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: sequelize.STRING,
      allowNull: false
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
            msg: "Email address must be valid"
        }
      } 
    },
    mobile: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: {
            args: [11, 11],
            msg: "Mobile Number Must be 11 number"
        },
      } 
    },
    user_id: {
      type: sequelize.STRING,
      allowNull: false
    }
  }, {
    // options
  });

  module.exports = contact;