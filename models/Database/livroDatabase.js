const { Sequelize } = require('sequelize');
const database = require('../../db');


const Livro = database.define('livros', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
    },
    autor: {
        type: Sequelize.STRING,
    },
    ano: {
        type: Sequelize.INTEGER,
    },
    destaque: {
        type: Sequelize.BOOLEAN,
    },
    imagem: {
        type: Sequelize.STRING,
    },
});


module.exports = Livro;
