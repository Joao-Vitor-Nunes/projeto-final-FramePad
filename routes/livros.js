const express = require("express");
const router = express.Router();

const { criarLivro, retornarTodosLivros, excluirLivro } = require("../controllers/livrosController");

router.get("/", retornarTodosLivros);
router.post("/adicionar", criarLivro);
router.post("/excluir/:id", excluirLivro);


module.exports = router;
