const express = require('express');
const app = express();
const port = 3004;

const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(port, () => console.log(`proxy server listening on port ${port}`))