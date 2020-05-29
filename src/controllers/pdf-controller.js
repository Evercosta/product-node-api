'use strict';

const pdf = require('html-pdf');

exports.post = async(req, res, next) => {
    try {       
        await pdf.create(
            req.body.text, {})
                .toFile(`./pdf/${req.body.title}.pdf`, (err, respdf) => {
                    if (err) {
                        res.status(400).send({
                            message: 'Falha ao criar o PDF'
                        });           
                    } else {
                        res.status(201).send({
                            arquivo: respdf.filename
                        })       
                    }
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });        
    }
}
