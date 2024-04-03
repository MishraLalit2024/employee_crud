const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view-engine', 'ejs');
app.use(require('./routes/router'));


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
