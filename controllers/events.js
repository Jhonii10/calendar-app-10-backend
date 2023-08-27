const { response } = require("express")


const getEventos = (req,res=response)=>{
    rep.json({
        ok:true,
        msg: 'obtener eventos'
    })
}

const crearEvento = (req,res=response)=>{

    console.log('crear evento:',req.body);
    res.json({
        ok:true,
        msg: 'crear eventos',
      
    })
}

const actualizarEvento = (req,res=response)=>{
    res.json({
        ok:true,
        msg: 'actualizar eventos'
    })
}

const eliminarEvento = (req,res=response)=>{
    res.json({
        ok:true,
        msg: 'eliminar eventos'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento

}