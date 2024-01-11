const express = require('express');

//Create an app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello world desde docker\n');
});

//Listen port
const PORT = 9000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);