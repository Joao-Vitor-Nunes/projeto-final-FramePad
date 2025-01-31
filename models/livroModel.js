const livroDB = require('./Database/livroDatabase');

class Livro {
    constructor(titulo, autor, ano, imagem) {
        if (new.target === Livro) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.imagem = imagem;
    }

    async salvar() {
        await livroDB.create({
            titulo: this.titulo,
            autor: this.autor,
            ano: this.ano,
            imagem: this.imagem,
            destaque: this instanceof LivroDestaque, /* true se for destaque, false se for padrão */
        });
    }

    static async buscarTodos() {
        return await livroDB.findAll();
    }

    static async excluir(id) {
        await livroDB.destroy({ where: { id } });
    }
}

class LivroPadrao extends Livro {
    constructor(titulo, autor, ano, imagem) {
        super(titulo, autor, ano, imagem);
    }
}

class LivroDestaque extends Livro {
    constructor(titulo, autor, ano, imagem) {
        super(titulo, autor, ano, imagem);
    }
}

class FabricaLivro {
    static criar(tipo, dados) { /*static para poder ser chamada sem instanciar a classe*/
        if (tipo === 'padrao') {
            return new LivroPadrao(dados.titulo, dados.autor, dados.ano, dados.imagem);
        } else if (tipo === 'destaque') {
            return new LivroDestaque(dados.titulo, dados.autor, dados.ano, dados.imagem);
        } else {
            throw new Error('Tipo de livro desconhecido.');
        }
    }
}

module.exports = { Livro, LivroPadrao, LivroDestaque, FabricaLivro };
