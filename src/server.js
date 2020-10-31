const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes.js');
const routesAuth = require('./routesAuth.js');
const morgan = require('morgan'); //biblioteca de log

//const middleware = require('./middleware.js');

require ('./database');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors({origin: true, credentials: true}));

//app.use(middleware);

app.use(routes);
app.use(routesAuth);

console.log('Server running');

app.listen(3001);