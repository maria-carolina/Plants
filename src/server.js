const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes.js')
//const middleware = require('./middleware.js');

require ('./database');

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

//app.use(middleware);

app.use(routes);

console.log('Server running');

app.listen(3001);