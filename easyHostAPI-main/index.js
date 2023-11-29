const express = require('express');
const exphbs = require('express-handlebars');
const mysql2 = require('mysql2');
const PORT = 3333;
const app = express();
const conn = require("./db/conn");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Middleware para arquivos estáticos


