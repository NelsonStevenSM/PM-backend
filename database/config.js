const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const dbConnection = async() => {
  try {
    await mongoose.connect( process.env.MONGODB_CNN);
    // mongoose.connect("mongodb://localhost:27017/auth");
    console.log("Base de datos conectado");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = {
  dbConnection
};
