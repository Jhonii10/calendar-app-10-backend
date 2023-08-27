const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validatorCampos } = require('../middlewares/validador-campos');
const { isDate } = require('../helpers/isDate');
const router = Router()


// obtener eventos 
router.get(
    '/',
    validarJWT,
    
    getEventos
    );

// crear eventos 
router.post
    (
        '/',
        validarJWT,
        [
        check('title','el titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),
        validatorCampos
        ],
        crearEvento
    );

// actualizar eventos 
router.put('/:id',validarJWT ,actualizarEvento);

// borrar evento
router.delete('/:id',validarJWT ,eliminarEvento)

module.exports = router;