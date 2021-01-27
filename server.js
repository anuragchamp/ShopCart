const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
// const passport = require('passport');
const { response } = require("express");


const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use(express.static("public"));


///////////////////////////////////////////////////////////// Database Work ///////////////////////////////////////////////////////////////////////


let db  =  mongoose.connect("mongodb+srv://admin_shivam:Test123@cluster0.h5bdc.mongodb.net/TEST1?retryWrites=true&w=majority",{useNewUrlParser:true,
useUnifiedTopology:true});


const usersData = new mongoose.Schema({
    email:String,
    password:String,
    logdate: String
})
const user = mongoose.model("user" , usersData);

 let d=mongoose.connection

// Check connection
d.once('open', () => {
    console.log('Connected to MongoDB!');
  })

// Check for DB errors
d.on('error', (err) => {
    console.log(err);
  });

//   app.get("/",function(req,res){

//     res.send("/register.html");
    
// });

// app.get("/login",function(req,res){

//     res.send("/login.html");
// });


app.post("/log",function(req , res){
    //console.log(req.body)
    //console.log(req.headers.pass);
    //console.log(req.headers.user);
    let curdate = new Date();
    const person = new user({
        email : req.body.user,
        password : req.body.pass,
        logdate: curdate
    });
    person.save(function(err){
        if(err){
            console.log(err);
        } else {
            console.log(req.body)
            
            res.send(person);
            //console.log("done")
        }
    });

});

app.post('/login',function(req ,res){

    const userName = req.body.userName;
    const password = req.body.password;

    user.findOne({userName : userName} , function (err , foundUser){

        if(err)
        {
            console.log(err);
        } 
        else 
        {
            if(foundUser)
            {
                if(foundUser.password === password)
                {
                    res.sendFile(__dirname + '/secret.html')
                }
            }
        }
    });
});









app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running");
})

// google.com