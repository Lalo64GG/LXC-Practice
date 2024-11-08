// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Ruta simple que devuelve "Hola"
app.get('/api/saludo', (req, res) => {
    res.send('Hola');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
