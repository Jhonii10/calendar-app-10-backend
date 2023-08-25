const { response } = require("express")


const getEventos = (res,rep=response)=>{
    rep.json({
        ok:true,
        msg: 'obtener eventos'
    })
}

const crearEvento = (res,rep=response)=>{
    rep.json({
        ok:true,
        msg: 'crear eventos'
    })
}

const actualizarEvento = (res,rep=response)=>{
    rep.json({
        ok:true,
        msg: 'actualizar eventos'
    })
}

const eliminarEvento = (res,rep=response)=>{
    rep.json({
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