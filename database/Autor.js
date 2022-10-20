const Sequelize = require('sequelize');
const connection = require('./database.js');


const Autor = connection.define('autores', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    bio:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    foto:{
        type: Sequelize.STRING,
        allowNull: false
    },
    datNasc:{
        type: Sequelize.DATE,
        allowNull: false
    },
    datMort:{
        type: Sequelize.DATE,
        allowNull: true
    }
});



Autor.sync({ force: true });

module.exports = Autor;