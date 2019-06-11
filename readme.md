# Introdução

Essa aplicação consiste em uma API REST usando Node.js, Mongoose, Autenticação com JWT, Validação com express-validation e Joi, fila com Kue e tratamento de erros com Youch e Sentry.

A ideia é criar uma aplicação que simula um marketplace onde os usuários podem se cadastrar e logar, recebendo um token de autenticação JWT que deve ser usado nas demais rotas. A partir disso, os usuários podem publicar anúncios dos serviços que desejam oferecer e também realizar intenções de compra em outros anúncios. Uma vez feita a intenção de compra, o usuário dono do anúncio pode aceitar essa solicitação, tornando o anúncio indisponível para próximas compras.

Esta aplicação foi construída com o apoio do Bootcamp da Rocketseat. 🚀💜

# Instalação

`docker run --name noderedis -p 6379:6379 -d -t redis:alpine`

`sudo docker run -d -p 27017:27017 -p 28017:28017 --name gonode03 -e AUTH=no mongo`
