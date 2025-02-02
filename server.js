const express = require("express");
const mongosse = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//BodyParse has piece of middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongosse
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Use Routes
app.use("api/items", items);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port ${port}"));
