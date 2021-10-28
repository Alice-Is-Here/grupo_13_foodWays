
  //header, nav, footer, section, article

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;


app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/registro', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/registro.html'));
});

app.listen(port, ()=>console.log(`Server is running in port ${port}`));   
