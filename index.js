var express = require("express");

var app = express();

var port = 3001;

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/home.html');
});
app.listen(port, function(){
    console.log(`Server is running on port :${port}`)
    }
);