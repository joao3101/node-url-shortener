const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const route = require("./routes/ShortenerRoute.js");

const app = express();

app.use(express.json());

app.use("", route);

const PORT = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongo database"))
  .catch((e) => console.error(e));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));