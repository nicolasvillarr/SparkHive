const { Router } = require('express');
// Importar todos los routers;
const rutas = require('./rutas.js')

const router = Router();

// Configurar los routers
router.use("/producto", rutas)


module.exports = router;
