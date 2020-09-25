const express = require('express');
const routes = express.Router();
const PlantController = require('./controllers/PlantController');

routes.get('/plant', PlantController.index);
routes.post('/plant', PlantController.store);
routes.get('/plant/:plantId', PlantController.show);
routes.delete('/plant/:plantId/delete', PlantController.delete);
routes.post('/plant/:plantId/update', PlantController.update);

module.exports = routes;