const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://desafioGama:zbJYElq2F8Z8RuZ5@cluster0.rzi0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  //  useNewUrlParser:true,
   // useCreateIndex: true
});

app.use(express.json());
app.use('./docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('Rodando na porta 5000');
});