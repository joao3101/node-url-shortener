const mongoose = require("mongoose");
const shortid = require("shortid");

const UrlSchema = new mongoose.Schema({
  url: { type: String, required: true },
  shortId: { type: String, required: true, default: shortid.generate() },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("url", UrlSchema);
