'use strict'; // ajuda o slint a checar erros

const express = require('express');
const bodyParser = require('body-parser');
const monggose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

// Conecta ao banco
monggose.connect(config.connectionString);

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');
const pdfRoute = require('./routes/pdf-route');

// converter o body com o bodyParser
app.use(bodyParser.json({
    limit: '10mb'
}));
// codifica a url
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-control-Allow-Origin', '*');
    res.header(
        'Access-control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header(
        'Access-control-Allow-Methods', 
        'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);
app.use('/pdf', pdfRoute)

module.exports = app;