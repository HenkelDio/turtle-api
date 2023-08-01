
const Database = require("./index.js");

const { INTEGER, STRING } = require("sequelize")

const CompaniesModel = Database.define("companies", {
    company_id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    company_name: {
        type: STRING,
        allowNull: false,
    }, 
    company_address: {
        type: STRING,
        allowNull: false
    },
    company_contact: {
        type: STRING,
        allowNull: false
    },
    company_register: {
        type: STRING(14),
        allowNull: false
    },
    company_telephone: {
        type: STRING(11),
        allowNull: false
    }
}, { timestamps: false });

Database.sync()

module.exports = CompaniesModel;