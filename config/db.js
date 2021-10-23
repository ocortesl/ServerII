const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      //useFindAndModify: false
    });
    console.log("BD conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // para la app
  }
};

module.exports = conectarDB
