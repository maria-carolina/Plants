const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

//models
const Plant = require('../models/Plant');
const Genus = require('../models/Genus');
const User = require('../models/User');

//passando conexão
Plant.init(connection);
Genus.init(connection);
User.init(connection);


//passando models para as associações
Plant.associate(connection.models);
Genus.associate(connection.models);
User.associate(connection.models);


module.exports = connection;
