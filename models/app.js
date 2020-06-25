const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route'); 
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'users'
let db

const mongoose = require('mongoose');
const url2 = 'mongodb://127.0.0.1:27017/users';
mongoose.connect(url2, { useNewUrlParser: true  });
const db2 = mongoose.connection
db2.once('open', _ => {
console.log('Database connected:', url2)
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/products', product);/

app.listen(3000, () => {
    console.log('Server is running ');
});


    