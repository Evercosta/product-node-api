// 'use strict';
// // var config = require('../config');
// // // var sendgrid = require('sendgrid')(config.sendgridKey);


// // exports.send = async() => { // to, subject, body
// //     const sgMail = require('@sendgrid/mail');
// //     sgMail.setApiKey(config.sendgridKey);
// //     const msg = {
// //         to: 'evercosta@gmail.com',
// //         from: 'ever_costa@hotmail.com',
// //         subject: 'Sending with Twilio SendGrid is Fun',
// //         text: 'and easy to do anywhere, even with Node.js',
// //         html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// //     };
// //     sgMail.send(msg);
// //     // sendgrid.send({
// //     //     to: to,
// //     //     from: 'test@example.com',
// //     //     subject: subject,
// //     //     html: body
// //     // })
// // }

// var nodemailer = require('nodemailer');

// // O primeiro passo é configurar um transporte para este
// // e-mail, precisamos dizer qual servidor será o encarregado
// // por enviá-lo:


// exports.send = async() => {
//     var transporte = nodemailer.createTransport({
//         service: 'Gmail', // Como mencionei, vamos usar o Gmail
//         auth: {
//             user: 'evercosta@gmail.com', // Basta dizer qual o nosso usuário
//             pass: ''             // e a senha da nossa conta
//         } 
//     });
    
//     // Após configurar o transporte chegou a hora de criar um e-mail
//     // para enviarmos, para isso basta criar um objeto com algumas configurações
//     var email = {
//         from: 'evercosta@gmail.com', // Quem enviou este e-mail
//         to: 'ever_costa@hotmail.com', // Quem receberá
//         subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
//         html: 'E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
//     };

//     // Pronto, tudo em mãos, basta informar para o transporte
//     // que desejamos enviar este e-mail
//     transporte.sendMail(email, function(err, info){
//         if(err)
//             throw err; // Oops, algo de errado aconteceu.

//         console.log('Email enviado! Leia as informações adicionais: ', info);
//     });
// }