const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/empresa', (req, res) => {
    res.render('empresa');
});

app.get('/candidato', (req, res) => {
    res.render('candidato');
});

app.get('/implementador', (req, res) => {
    res.render('implementador');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
