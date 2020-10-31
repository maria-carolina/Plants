const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer')
const PlantController = require('./controllers/PlantController');
const AuthController = require('./controllers/AuthController');

routes.get('/plant', PlantController.index);
routes.post('/plant',  PlantController.store);
routes.get('/plant/:plantId', PlantController.show);
routes.delete('/plant/:plantId/delete', PlantController.delete);
routes.post('/plant/:plantId/update', PlantController.update);
routes.post('/plant/:plantId/image', multer(multerConfig).single('file'), PlantController.storeImage);

//auth
routes.post('/register', AuthController.store);
routes.post('/authenticate', AuthController.authenticate);

module.exports = routes;