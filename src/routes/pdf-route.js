'use strict'; 

const express = require('express');
const router = express.Router();
const controller = require('../controllers/pdf-controller');
const serviceAuth = require('../services/auth-service');

router.post('/', serviceAuth.authorize, controller.post);

module.exports = router;