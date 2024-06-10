const { newConnection } = require("../db/testBD")

const obtenerTodosLosLibros = async (req, res) => {
  
  const connection = await newConnection()

  const results = await connection.query(`SELECT * FROM books`)

  res.json(results[0])

  connection.end()
}

const obtenerLibroPorNombre = async (req, res) => {
  
  const connection = await newConnection()
  const { title } = req.query
  console.log(title);
  const resuls = await connection.query("SELECT * FROM books WHERE title = (?) ", [title])



  res.json(resuls[0])

  connection.end()
}

// const obtenerLibroPorNombre = async (req, res) => {
//   let connection;

//   try {
//     connection = await newConnection();
//     const { title } = req.query;
//     console.log(title);

//     if (!title) {
//       return res.status(400).json({ error: "El parámetro 'title' es requerido" });
//     }

//     const [results] = await connection.execute('SELECT * FROM books WHERE books.title = ?', [title]);

//     console.log(results);

//     if (results.length === 0) {
//       return res.status(404).json({ message: 'Libro no encontrado' });
//     }

//     res.json(results[0]);
//   } catch (error) {
//     console.error('Error al obtener el libro:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   } finally {
//     if (connection) {
//       await connection.end();
//     }
//   }
// };

const crearLibro = async (req, res) => {
  const connection = await newConnection()

  const { title, author } = req.body

  await connection.query("INSERT INTO books(title, author) VALUES (?,?)", [title, author])

  connection.end()
}


module.exports = {
  obtenerTodosLosLibros,
  obtenerLibroPorNombre,
  crearLibro
}