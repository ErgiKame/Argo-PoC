const { json } = require('express');
var express = require('express');
var app = express();
require('dotenv').config();

app.get('/', function (req, res) {
   const envVar = process.env.VAR;
   console.log(`envVar: ${envVar}`);
   res.json(envVar);
})





const port = 3000;
app.listen(port, function () {

   console.log(`Example app listening at port: ${port}`)
})