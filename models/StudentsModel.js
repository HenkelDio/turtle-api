const Database = require("./index.js");
const { INTEGER, STRING } = require("sequelize");

const Students = Database.define("students", {
    
    student_id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_company_id: {
        type: INTEGER,
        references:{
            model: require("./CompaniesModel.js"),
            key: "company_id"
        }
    },
    user_name: {
        type: STRING,
        allowNull: false
    },
    user_register: {
        type: STRING(11),
        allowNull: false
    },
    user_telephone: {
        type: STRING(11),
        allowNull: false
    },
    user_email: {
        type: STRING,
        allowNull: false
    },
    user_password: {
        type: STRING,
        allowNull: true,
        defaultValue: null
    }
});

Database.sync();

module.exports = Students;