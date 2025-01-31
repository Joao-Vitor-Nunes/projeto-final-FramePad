const { FabricaLivro, Livro } = require("../models/livroModel");

const livroController = {
    criarLivro: async (req, res) => {
        try {
            const { tipo, titulo, autor, ano, imagem } = req.body;
            const livro = FabricaLivro.criar(tipo, { titulo, autor, ano, imagem });
            await livro.salvar();
            res.redirect("/");
        } catch (error) {
            console.error("Erro ao criar livro:", error);
            res.status(500).send("Erro ao criar livro");
        }
    },

    retornarTodosLivros: async (req, res) => {
        try {
            const livros = await Livro.buscarTodos();
            res.render("livros", { livros });
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            res.status(500).send("Erro ao buscar livros");
        }
    },

    excluirLivro: async (req, res) => {
        try {
            const { id } = req.params; 
            await Livro.excluir(id);
            res.redirect("/");
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
            res.status(500).send("Erro ao excluir livro");
        }
    },

    retornarindex: async (req, res) => {
        try {
            const livros = await Livro.buscarTodos();
            res.render("index", { livros });
        } catch (error) {
            console.error("Erro ao buscar livros:", error);
            res.status(500).send("Erro ao buscar livros");
        }
    },
};

module.exports = livroController;
