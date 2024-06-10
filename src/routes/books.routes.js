const { obtenerTodosLosLibros, obtenerLibroPorNombre, crearLibro } = require("../controllers/controllers");

const router = require("express").Router();

router.get('/book', obtenerTodosLosLibros)
router.get('/book/search?:title', obtenerLibroPorNombre)
router.post('/book', crearLibro)

module.exports = router