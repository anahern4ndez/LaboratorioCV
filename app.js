var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.send('Hello world');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.sendFile(path.join(__dirname, 'css', 'animate.css', 'site.css', 'aet-line-font.css'));
    res.render("index", {title: "my app title", list: ["hola1", "hola2"]});
})

app.listen(port, function(){
    console.log('listening on port '+port)
})