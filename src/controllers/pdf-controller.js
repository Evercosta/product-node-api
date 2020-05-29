'use strict';

const pdf = require('html-pdf');
const fs = require("fs");
const ejs = require('ejs');

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

exports.get = async(req, res, next) => {
    try {
        const name = req.params.name;
        const newfilename =  name + '-' + Date.now() + '.pdf';

        await ejs.renderFile('./pdf/template.ejs', {name: name}, (err, html) => {
            if(err){
                res.status(400).send({
                    message: 'Erro ao renderizar o arquivo'
                });
                return;  
            }            
            pdf.create(html, {}).toFile(newfilename, (errPdf, resPdf) => {
                if (errPdf) {
                    res.status(400).send({
                        message: 'Falha ao criar o PDF'
                    });           
                } else {
                    var file = fs.createReadStream(resPdf.filename);
                    var stat = fs.statSync(resPdf.filename);
                    res.setHeader('Content-Length', stat.size);
                    res.setHeader('Content-Type', 'application/pdf');
                    res.setHeader('Content-Disposition', `attachment; filename=${newfilename}`);
                    file.pipe(res);
                }
            });
        });
         
        // await pdf.create(
        //     req.params.text, {})
        //         .toFile(`./pdf/${req.params.title}.pdf`, (err, respdf) => {
        //             if (err) {
        //                 res.status(400).send({
        //                     message: 'Falha ao criar o PDF'
        //                 });           
        //             } else {
        //                 var file = fs.createReadStream(respdf.filename);
        //                 var stat = fs.statSync(respdf.filename);
        //                 res.setHeader('Content-Length', stat.size);
        //                 res.setHeader('Content-Type', 'application/pdf');
        //                 res.setHeader('Content-Disposition', `attachment; filename=${req.params.title}.pdf`);
        //                 file.pipe(res);
        //             }
        // });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });        
    }
}
