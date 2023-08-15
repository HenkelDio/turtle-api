
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
    company_contact_email: {
        type: STRING,
        allowNull: false
    },
    company_cnpj: {
        type: STRING(14),
        allowNull: false
    },
    company_contact_telephone: {
        type: STRING(11),
        allowNull: false
    }
});

Database.sync();

module.exports = CompaniesModel;