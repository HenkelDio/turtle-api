const Database = require("./index.js");
const { INTEGER, STRING } = require("sequelize")

let AdminsModel = Database.define("admins", {
    admin_id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    admin_name: {
        type: STRING,
        allowNull: false
    },
    admin_email: {
        type: STRING,
        allowNull: false
    },
    admin_password: {
        type: STRING,
        allowNull: false
    }
}, { timestamps: false });

Database.sync()

module.exports = AdminsModel;