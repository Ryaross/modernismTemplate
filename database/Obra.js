const Sequelize = require('sequelize');
const connection = require('./database.js');
const Autor = require('./Autor.js');


const Obra = connection.define('obras', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    desc:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    foto:{
        type: Sequelize.STRING,
        allowNull: false
    },
    data:{
        type: Sequelize.DATE,
        allowNull: false
    }
});


Obra.belongsTo(Autor); // 1p1

Obra.sync({ force: true });

module.exports = Obra;