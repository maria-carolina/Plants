const express = require('express');
const routesAuth = express.Router();
const authMiddleware = require('./middlewares/auth');
const PlantController = require('./controllers/PlantController');

routesAuth.use(authMiddleware);

routesAuth.get('/testeAuth', PlantController.indexAuth);

module.exports = routesAuth;