// const { validationResult } = require("express-validator");
const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

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

     console.log({usuario})

    await usuario.save();

    res.status(201).json({
        ok:true,
        uid: usuario.id,
        name:usuario.name,

    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false ,
            msg :"Error al registrar un nuevo usuario"
        })
    }
    }

const loginUsuario = (req,res)=>{

    const {email, password}  = req.body;

    res.json({
        ok:true,
        msg:'login',
        email,
        password
    })
}

const revalidarToken= (req,res)=>{
    res.json({
        ok:true,
        msg:'revalidacion de token'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,

}


/**
 * mongoDb
 * db user: mern_user
 * db pass: hPH0JA7IcYsmruje
 */