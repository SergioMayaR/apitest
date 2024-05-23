const express = require("express");
const app = express();
var port = process.env.PORT || 5000; //Obtenemos el puerto por donde se conecta
//Respuesta de la ruta padre
app.get('/', function (req, res) {
    //Genera la respuesta que se dara
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: `Inici`
    };
    res.send(respuesta); //Envia una respuesta
  });

//Para eliminar la cache 
app.use(function (req, res, next) {
    if (!req.user)
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
  });
  console.log(port);//Se imprime el puerto donde se ubica
  app.listen(port); //llama el puerto