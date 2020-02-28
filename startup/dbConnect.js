const mongoose = require("mongoose");
// const Fawn = require("fawn");
// const config = require("config");

const connectionString =
  "mongodb+srv://shobhanbiswas11:nokia@123@that-cluster-0-br6ue.mongodb.net/mindspark?retryWrites=true&w=majority";

module.exports = function() {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("Something went Wrong while conneting to the Database");
  });
  db.once("open", () => {
    console.log("Connected to the Database");
  });
};
