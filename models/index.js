const { Sequelize, STRING, INTEGER } = require("sequelize")
require("dotenv").config();

const Database = new Sequelize("SouzaTreinamentos", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    logging: false
})

Database.authenticate()
.then( _ => {
    console.log("Conexão com o banco de dados efetuada com sucesso!");
})
.catch(err => {
    console.error(err)
})

module.exports = Database;