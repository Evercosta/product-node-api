// criação de variaveis globais no node
global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = '<p>Olá <strong>{0}</strong>, ' +
    'seja bem vindo ao Sistema Teste de Produtos!</p>' + 
    '<p>Sua senha é <strong>{1}</strong>.</p>';

module.exports = {
    connectionString: 'mongodb+srv://ever:ever@customtrade-ijj9m.azure.mongodb.net/test?retryWrites=true&w=majority',
    // usar pra enviar email
    sendgridKey: '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', 
    // storage de img
    containerConnectionString: 'TBD'
}