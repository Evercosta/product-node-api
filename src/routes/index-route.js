'use strict'; // ajuda o slint a checar erros

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Node Product API",
        version: "1.0.0"
    })
});

module.exports = router;