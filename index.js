var express = require("express");
var app = express();
// O express roda com base no http nativo do node para que o socketio funcione
var http = require("http").createServer(app);
var io = require("socket.io")(http);



//View Engine 
app.set("view engine", "ejs");

//Rotas
app.get("/", (request, response) => {
  response.render("index");
})

http.listen(4000)