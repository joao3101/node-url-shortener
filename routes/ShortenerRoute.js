const express = require("express");

const { Redirect, AddUrl } = require("../controller/ShortenerController");

const router = express.Router();

// / GET
router.get("/:shortId", Redirect);

// / POST
router.post("/", AddUrl);

module.exports = router;