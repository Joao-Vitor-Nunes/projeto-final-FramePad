const usuarioDB = require('./Database/usuarioDatabase');

class Usuario {
    static instance = null; /*por padrao nao existe um usuario*/

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static async getInstance(nome = null, email = null, senha = null) {
        if (Usuario.instance === null) { /*se nao existe um usuario*/
            const usuarioEncontrado = await usuarioDB.findOne();
            if (!usuarioEncontrado) {
                if (!nome || !email || !senha) {
                    throw new Error("Nenhum administrador encontrado e nenhum dado fornecido para criação.");
                }
                
                const novoUsuario = await usuarioDB.create({ nome, email, senha }); /*cria um novo usuario*/
                Usuario.instance = new Usuario(novoUsuario.nome, novoUsuario.email, novoUsuario.senha);
            } else {
                /*se ja existe um usuario no banco*/
                Usuario.instance = new Usuario(
                    usuarioEncontrado.nome,
                    usuarioEncontrado.email,
                    usuarioEncontrado.senha
                );
            }
        }
        return Usuario.instance;
    }
}

module.exports = Usuario;
