const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3210;
app.listen (port, ()=> {
    console.log(`server berjalan di http://localhost:${port}`)
});