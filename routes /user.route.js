const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/test', user_controller.test);
module.exports = router;

app.set('view engine','ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


/*db2.on('error', err => {
console.error('connection error:', err)
})*/



app.use(express.static('views'));

    app.get("/", function(req, res){
        res.sendFile(__dirname + "/index.html");
    });

    app.post('/', function(req, res){
        res.render('SignUp');
        /*emailCollection.insertOne(req.body)
        .then(result => {
        res.redirect('/index');
        })
        .catch(error => console.error(error))*/
    });

    app.post("/",function(req, res){
        res.sendFile(__dirname + "/Login");
    });

    app.post("/Login",function(req,res){
        res.redirect('dashboard');
    });
    
    //app.use(bodyParser.json())
   /* app.put('/email', (req, res) => {
        console.log(req.body)
        })*/
    app.post('/SignUp', (req, res,err) => {
        emailCollection.insertOne(req.body)
            .then(result => {
            res.redirect('/');
            })
            .catch(error => console.error(error))
        })
       
    /*app.get('/', (req, res) => {
        db.collection(email).find().toArray()
            .then(results => {
            res.render('index.html', { email: results })
            })
            .catch(error => console.error(error))
        })*/
        router.post('/create', user_controller.user_create);

        router.get('/:id', user_controller.user_details);

        router.put('/:id/update', user_controller.user_update);

        router.delete('/:id/delete', user_controller.user_delete);

        /*app.listen(3000,function(){
            console.log("Server is running");
        });*/
        





/*app.post('/Login', (req, res) => {
    console.log(req.body)
    })
app.get("/test/:id", function(req, res){
    where:
    {id:req.params.id}
    res.render("test", {my: id});
    console.log(__dirname + "/index.html");
    res.status(200).json("done");
});
app.post('/', function(req, res){
    db.insertOne(req.body,function(err, result){
        if (err) return console.log("Erro: " + err);
 
        console.log("saved to database");
        res.redirect('/');
    });
});*/

