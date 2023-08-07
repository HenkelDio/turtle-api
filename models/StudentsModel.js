const Database = require("./index.js");
const { INTEGER, STRING } = require("sequelize");

const Students = Database.define("students", {
    
    student_id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    student_company_id: {
        type: INTEGER,
        allowNull: false
    },
    student_name: {
        type: STRING,
        allowNull: false
    },
    student_cpf: {
        type: STRING(11),
        allowNull: false
    },
    student_cellphone: {
        type: STRING(11),
        allowNull: false
    },
    student_email: {
        type: STRING,
        allowNull: false
    },
    student_password: {
        type: STRING,
        allowNull: true,
        defaultValue: null
    }
});

Database.sync();

module.exports = Students;