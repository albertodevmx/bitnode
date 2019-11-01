'use strict';
const express = require('express');
const app = express();
// const fs = require('fs');

app.get('/', (req, res) => {

    // const index = fs.readFileSync('./index.html');
    // res.write(index, function(err) { res.end(); });
    res.sendFile(__dirname + "/" + "index.html");

});


app.listen(8080, () => {
    console.log("Me estoy ejecutando");
});

// module.exports = app;