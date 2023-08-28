const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario =async (req,res = response)=>{
    
    const {email, password}  = req.body;

    try {

         let usuario = await Usuario.findOne({email})

        if (usuario) {
            return res.status(400).json({
                ok:false,
                msg:'un usuario ya existe con ese correo'
            })
        }

     usuario = new Usuario(req.body)


     // encriptar contraseñas
     const salt = bcrypt.genSaltSync()
     usuario.password = bcrypt.hashSync(password,salt)


    await usuario.save();

    // Generar JWT
    const token = await generarJWT( usuario.id, usuario.name );

    res.status(201).json({
        ok:true,
        uid: usuario.id,
        name:usuario.name,
        token

    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false ,
            msg :"Error al registrar un nuevo usuario"
        })
    }
    }

const loginUsuario = async(req,res)=>{

    const {email, password}  = req.body;

    try {

        let usuario = await Usuario.findOne({email})

        if (!usuario) {
            return res.status(400).json({
                ok:false,
                msg:'El usuario es incorrecto no exite el email'
            })
        }

        const validPassword = bcrypt.compareSync(password,usuario.password)

        if (!validPassword) {
            return res.status(400).json({
                ok:false,
                msg:'El password es incorrecto '
            })
        }

        const token = await generarJWT( usuario.id, usuario.name );

        res.json({
            ok: true,
            uid: usuario.id,
            name:usuario.name,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false ,
            msg :"Error al logear usuario"
        })
        
    }

    
}

const revalidarToken = async (req, res = response ) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        uid, name,
        token
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,

}

