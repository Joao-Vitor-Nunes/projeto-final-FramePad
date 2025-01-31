const Usuario = require("../models/UsuarioModel");

const ValidarUsuario = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        let usuario;
        try {
            /* Verifica se existe algum usuario no bd*/
            usuario = await Usuario.getInstance();
        } catch (error) {
            console.log("Nenhum administrador encontrado, criando um novo...");
        }

        if (usuario && usuario.email === email && usuario.senha === senha) {
            /*Se existe usuário, faz login*/
            console.log("Login realizado com sucesso."); /*consoles teste*/
            return res.redirect("/"); 
        } else if (!usuario) {
            /* Se nao existir, cria */
            await Usuario.getInstance(nome, email, senha);
            console.log("Novo administrador criado.");
            return res.redirect("/"); 
        } else {
            throw new Error("Usuário ou senha inválidos.");
        }
    } catch (error) {
        console.error("Erro ao autenticar ou criar usuário:", error);
        return res.status(400).send(error.message);
    }
};
const retornarTodosUsuarios = async (req, res) => {/*pagina de login*/
    try {
        res.render("user"); 
    } catch (error) {
        console.error("Erro ao carregar a página de login:", error);
        res.status(500).send("Erro ao carregar a página de login");
    }
};

module.exports = { ValidarUsuario, retornarTodosUsuarios };
