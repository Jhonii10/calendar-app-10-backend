const { response } = require("express")
const Evento = require("../models/evento")



const getEventos = async(req,res=response)=>{

    const eventos = await Evento.find()
                                .populate('user','name');
    res.json({
        ok:true,
        eventos
    })
}

const crearEvento = async(req,res=response)=>{

    const evento = new Evento(req.body)
    

    try {
        //evento.user = req.uid;
        const eventoGuardado = await evento.save();
        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'contacte al administrados '
        })
    }
    
}

const actualizarEvento = async (req,res=response)=>{

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId)
        

        if (!evento) {
            return res.status(404).json({
                ok:false,
                msg:'evento no existe por ese id'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "no tienes permisos para editar este evento"
            })
        }
        

        const nuevoEvento = {
            ...req.body,
            user: uid,
        }
        


        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true})


        res.json({
            ok:true,
            evento: eventoActualizado
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor"
        })
    }
    
}

const eliminarEvento = async(req,res=response)=>{

    const eventoId = req.params.id;
    const uid = req.uid;

    console.log({eventoId , uid});

    try {

        const evento = await Evento.findById(eventoId)
        

        if (!evento) {
           return res.status(404).json({
                ok:false,
                msg:'evento no existe por ese id'
            })
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "no tienes permisos para eliminar este evento"
            })
        }
         


        const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok:true,
            msg: `el evento eliminado fue: ${eventoId}`
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Error interno del servidor"
        })
    }

    
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento

}