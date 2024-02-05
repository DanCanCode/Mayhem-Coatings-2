const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
module.exports = app;

// STATIC FILE-SERVING MIDDLEWARE
app.use(express.static(path.join(__dirname, "..", "/client/public/")));

// BODY PARSING MIDDLEWARE
app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

// CORS
app.use(cors());

// INCLUDE ALL ROUTES
app.use("/api/users", require("./api/users"));

// SENDS INDEX.HTML
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/client/public/index.html"));
});

// ERROR HANDLING ENDWARE
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

// SERVER PORT
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
