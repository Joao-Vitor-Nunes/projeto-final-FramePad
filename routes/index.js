const express = require("express");
const router = express.Router();

const { retornarindex} = require("../controllers/livrosController");

router.get("/", retornarindex);

module.exports = router;
