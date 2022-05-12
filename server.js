const express = require("express");
const mongoose = require("mongoose");

// Install Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect("mongodb://127.0.0.1:27017/nosqlnetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Logs mongo queries being executed
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
