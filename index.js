var express = require("express");
var app = express();
// O express roda com base no http nativo do node para que o socketio funcione
var http = require("http").createServer(app);
var io = require("socket.io")(http);

//Esse socket é a instância de um cliente conectado na aplicação
io.on("connection", (socket) => {

  socket.on("disconnect", () => {
    console.log("Y desconectado: " + socket.id);
  });

  socket.on("BemVindo", (data) => {
    console.log("Evento executado")
    console.log(data);
  })
  socket.on("palavra", (data) => {
    console.log(data);
    socket.emit("resultado", data + " - Por que?");
  });
});

//View Engine 
app.set("view engine", "ejs");

//Rotas
app.get("/", (request, response) => {
  response.render("index");
});

http.listen(4000)