const express = require("express")
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const User = require("./models/User");
const insert = require("./Insert");
var cnt=0;

mongoose.connect("mongodb://localhost:27017/Userdb", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("MongoDB Connected\nSonali 19BDS0114");
    insert();
})

app.get('/', function (req, res) { 
    res.sendFile(__dirname + '/loginform.html');
});

app.post('/post', function (req, res) {
    
    var uname = req.body.username; 
    var pword = req.body.pw; 
    User.findOne({$and:[{user: uname},{pw:pword}]}, function (err, result) {
        if (err)
            throw err;
        
        if(result==null)
        {
            cnt=cnt+1;
            console.log("Login attempt:"+ cnt);
            if(cnt==3)
                res.send("Too many attempts. You have been locked!\n");
            else
                res.send("Username/Password is incorrect!");
        }
        else
        {
            res.send("Login successful! Welcome, "+uname+".\n"); 
            console.log(result);
        }

    });    
});

app.listen(3000, function () {
    console.log("\nServer has started. Open http://localhost:3000/ on your browser."); 
});
