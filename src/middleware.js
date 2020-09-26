const express = require('express');
const middleware = express();

//middleware
middleware.use((req, res, next) => {
    console.log('teste');
    next();
});


module.exports = middleware;