const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router()


// obtener eventos 
router.get('/',validarJWT ,getEventos);

// crear eventos 
router.post('/',validarJWT ,crearEvento);

// actualizar eventos 
router.put('/:id',validarJWT ,actualizarEvento);

// borrar evento
router.delete('/:id',validarJWT ,eliminarEvento)

module.exports = router;