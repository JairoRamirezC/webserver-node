const express = require('express')
require('dotenv').config();
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => {err && console.log({err})});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    titulo: "Curso de Node",
    nombre: "Jairo Ramirez Castaño"
  });
});

app.get('/generic', (req, res) => {
  // res.sendFile(__dirname + '/public/generic.html');
  res.render('generic', {
    titulo: 'Generic',
    nombre: 'Jairo Ramirez Castaño'
  })
});

app.get('/elements', (req, res) => {
  // res.sendFile(__dirname + '/public/elements.html');
  res.render('elements', {
    titulo: 'Elements',
    nombre: 'Jairo Ramirez'
  })
});

app.get('*', (req, res) => {
  // res.send('404 | page not found');
  res.status(404).send('Sorry, we cannot find that!');
});

// app.listen(8080);
app.listen(port, () => {
  console.log(`app escuchando en http://localhost:${port}`);
})