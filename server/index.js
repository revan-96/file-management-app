const express = require('express');
const apiRoute = require('./api');
const app = express();
const port = 3000;
const path = require('path');

if(process.env.ENV == 'development') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/dev.html'));
  });
} 
app.use(express.static('frontend'));

app.use(express.json());

app.use('/api', apiRoute);
app.use((err, req, res, next) => {
    console.error(err.stack); 

    res.status(500).json({
        message: 'Internal Server Error',
        error: err.message, 
    });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});