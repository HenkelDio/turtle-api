
const Database = require("./index.js");

const { INTEGER, STRING } = require("sequelize")

const CompaniesAddressModel = Database.define("companies_addresses", {
    company_address_id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    company_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: "companies",
            key: "company_id"
        }
    },
    company_cep: {
        type: STRING(8),
        allowNull: false
    },
    company_street: {
        type: STRING,
        allowNull: false
    },
    company_address_number: {
        type: STRING,
        allowNull: false
    },
    company_district: {
        type: STRING,
        allowNull: false
    },
    company_city: {
        type: STRING,
        allowNull: false
    },
    company_state: {
        type: STRING(2),
        allowNull: false
    }
}, { timestamps: false });

Database.sync();

module.exports = CompaniesAddressModel;