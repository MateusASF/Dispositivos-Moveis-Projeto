const { response } = require('express');
const express = require('express');

const app = express();

app.get('/texto', (request, response) => {
    return response.send('Aoooooba meu bom!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});