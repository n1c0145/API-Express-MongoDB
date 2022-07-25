const express = require("express");
const morgan = require("morgan");
const db = require("./database/database");
const path = require("path");

const app = express();

// Db connection
db();
//app.use(cors())

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/api/example', require('./routes/routes'));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
