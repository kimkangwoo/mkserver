const express = require("express");
const ejs = require("ejs");
var bodyparser = require("body-parser");

const app = express();

const port = 3001;

app.set("view engine", "ejs");
app.set("views", './view');

app.use(bodyparser.urlencoded({
    extended: false
}));

app.get("/", (req, res)=>{
    res.render('index'); // ./view/index.ejs
});
app.get("/profile", (req, res)=>{
    res.render('profile'); // ./view/profile.ejs
});
app.get("/login", (req, res)=>{
    res.render('login'); // ./view/login.ejs
});
app.get("/map", (req, res)=>{
    res.render('map'); // ./view/map.ejs
});
app.get("/information", (req, res)=>{
    res.render('information');
});
app.post("/contacProc", (req, res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const content = req.body.content;

    var a = `${name} ${phone} ${email} ${content}`;
    res.send(a);
})

app.listen(port, function(){
    console.log(`Server is running on port : http://localhost:${port}`)
    }
);