const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/RestApi', require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});