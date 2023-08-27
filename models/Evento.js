const { Schema, model } = require("mongoose");

const EventoShema = Schema({
    
    title: {
        type: String,
        required: true
    },
    notes:{
        type:String,

    },
    start:{
        type:Date,
        required:true,
    },

    end:{
        type:Date,
        required:true,
    },

    user:{
        type: Schema.Types.ObjectId,
        ref:'Usuario'
    },
});

module.exports = model('Evento', EventoShema);