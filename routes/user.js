const express = require("express");
const router = express.Router();
const { retornarTodosUsuarios,  ValidarUsuario } = require("../controllers/usuariosController");

router.get("/", retornarTodosUsuarios);
router.post("/login", ValidarUsuario);

module.exports = router;
