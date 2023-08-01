const { Sequelize, STRING, INTEGER } = require("sequelize")

const Database = new Sequelize("SouzaTreinamentos", "root", "", {
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