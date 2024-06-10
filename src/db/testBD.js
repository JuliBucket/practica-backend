const mysql2 = require("mysql2/promise")

const newConnection = async () => {

  const connection = await mysql2.createConnection({
    host: "localhost",
    user: "root", //usuario
    database: "testdb" //nombre de la base de datos
  })
return connection
}

module.exports = {
  newConnection
}
