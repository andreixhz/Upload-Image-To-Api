const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3333;
const router = require('./src/router');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/upload', router);

app.listen(port, function () {
  console.log('Server is running on PORT',port);
});