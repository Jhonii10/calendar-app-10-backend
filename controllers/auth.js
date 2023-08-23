const crearUsuario = (req,res)=>{
    res.json({
        ok:true,
        msg:'registro'
    })
}

const loginUsuario = (req,res)=>{
    res.json({
        ok:true,
        msg:'login'
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