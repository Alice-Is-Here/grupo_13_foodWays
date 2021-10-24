const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home_web.html'));
});

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));