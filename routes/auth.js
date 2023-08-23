/*
    rutas de usuario / auth
    host + /api/auth

*/

const {Router} = require('express');
const router = Router()
const {crearUsuario,loginUsuario,revalidarToken} = require('../controllers/auth');
const { check } = require('express-validator');
const { validatorCampos } = require('../middlewares/validador-campos');

router.post(
    '/new',
    [ // middlewares
      check('name','El nombre es obligatorio').not().isEmpty(),
      check('email','el email es obligatorio').isEmail(),
      check('password','el password debe tener mas de 6 caractere').isLength({min:6}),
      validatorCampos
    ],
    crearUsuario)

router.get(
     '/',
     [  // middleweres
        check('email','el email es obligatorio').isEmail(),
        check('password','el password debe tener mas de 6 caractere').isLength({min:6}),
        validatorCampos
     ],
     loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router;