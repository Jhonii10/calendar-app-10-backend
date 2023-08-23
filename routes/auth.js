/*
    rutas de usuario / auth
    host + /api/auth

*/

const {Router} = require('express');
const router = Router()


const {crearUsuario,loginUsuario,revalidarToken} = require('../controllers/auth')

router.post('/new',crearUsuario)

router.get('/', loginUsuario)

router.get('/renew', revalidarToken)

module.exports = router;