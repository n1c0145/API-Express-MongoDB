const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const db = async () => {
  await mongoose
    .connect(process.env.URI)
    .then((db) => console.log("Db is connected"))
    .catch((error) => console.error(error));
};

module.exports = db;

/*
Credentials Testing 
 najesmyawuqbrqpkoa@bvhrs.com
 URI = 'mongodb+srv://admin:admin@cluster0.uy87g.mongodb.net/?retryWrites=true&w=majority'
 testpassword*/