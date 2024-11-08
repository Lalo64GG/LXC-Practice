// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta simple que devuelve "Hola"
app.get('/api/saludo', (req, res) => {
    res.send('Hola');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});