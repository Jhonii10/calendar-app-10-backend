const mongoose = require("mongoose");

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database online. URL:', process.env.DB_CNN);
    } catch (error) {
        throw new Error('Error a la hora de iniciar la base de datos: ' + error.message);
    }
}

module.exports = {
    dbConection,
};
