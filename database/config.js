const mongoose = require("mongoose");

const dbConection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CNN,{})
         console.log('database online url:',process.env.DB_CNN);
            
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos ')
    }
}

module.exports = {
    dbConection,

}