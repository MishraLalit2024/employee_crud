const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');
const db = require('./conn/db')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./routes/router'));


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
