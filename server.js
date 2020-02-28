const express = require("express");
const app = express();
const port = 5000;

// Connection To the database
require("./startup/dbConnect")();

// Declaring the routes
require("./startup/routes")(app);

// Start Listening
app.listen(port, () => console.log(`Listening on port ${port}`));
