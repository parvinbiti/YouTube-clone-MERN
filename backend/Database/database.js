require("dotenv").config()
const mongoose = require("mongoose");

mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.f9aqief.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`,



    mongodb+srv://sani:Hh1287@youtube.7upqego.mongodb.net/?retryWrites=true&w=majority&appName=youtube,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected")) //If connected to DB
  .catch((err) => console.log(err)); //If not connected to DB
