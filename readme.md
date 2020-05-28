# Criar projeto node
- criar pasta do projeto
- acessar a pasta
- npm init -y para criar com yes de resposta padrão

# Criar arquivo server

# Instalar o express, http e o debug
npm i http express debug --save

# Normalizar porta
- em server criar função para checar porta disponível

# Função de erro
- criar função onError em server

# Criar função onListening em server

# Criar pasta bin na raiz

# Mover o server para dentro de bin

# Criar pasta src na raiz

# Criar app.js em src

# Mover partes de server para app.js

# Add start em packcage.json
- "start": "node ./bin/server.js"
- o comando para subir o server agora é npm start

# Instalar o nodemon para escutar mudanças
- npm i nodemon --save-dev
- -dev indica q isso não vai valer para prod
- agora o comando para subir o server é nodemon .\bin\server.js

# Instalar o bodyParser
- para converter o corpo da request
- npm i body-parser --save

# Criar arquivo de rotas
- em src/routes

# Criar controllers

# Criar banco mongo DB
- usando o mlab
- user ever senha ever

# Instalar mongoose
- para config o banco no projeto
- permite criação de schema para validar os dados
- npm i mongoose --save
- importar no app

# Criar models
- importar os models no app posicionados antes das rotas

# Importar os models no controller 

# Criar validator
- importa-lo no controler

# Criar repositorios
- importa-lo no controler

# Implementear os async
- nos repositories e controllers

# Criar o model Customer
- carrega-lo no app

# Criar o model Order
- carrega-lo no app
- referenciar o customer 

# Criar o repository e o controller para Customer

# Criar as rotas para customer

# Criar o repository e o controller para Order
- no repository get, add o populate para compor os dados do produto e do cliente

# Instalar o guid
- npm i guid --save
- importar em order controller

# Criar arquivo config
- importar no app

# Encriptar senha com md5
- npm i md5 --save
- importar no customer-controller

# Criar service para envio de email
- npm i nodemailer --save
- importa-lo no customer controller para utilizar

# Criar as rotas de order

# Autenticação
- instalar o jwt npm i jsonwebtoken@7.4.0 --save

# Criar o servide de auth
- importar nas routes e no controller de customer
- criar um metodo no repository para autenticação
- para testar no postman precisa colocar no header x-access-token como key e o token como value

# Refresh do token
- criar metodo no customer controller
- criar get by id no repository do customer
-  add a rota no customer route

# Autorização
- add roles em customer
- somente os admin podem mexer no product
- criar metodo isAdmin em auth service
- no produto route usar o isAdmin ao invés de authorize

# Add limite no bodyparse
- no arquivo app

# Habilitar o cors no app
