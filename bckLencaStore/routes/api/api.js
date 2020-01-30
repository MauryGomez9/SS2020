//rutas -> router -> app: express
//rutas ->router:entidad->router:api ->app:express


var express = require('express');
var router = express.Router();
//routers de entidades
var SeguridadRouter = require('./seguridad/seguridad');

router.use('/seguridad',SeguridadRouter);


//http://localhost:3030/api/version
router.get('/version',function(req, res){
    res.status(200).json({"version":"API v1.0"})
});

router.get('/yo',function(req, res){
    res.status(200).json({"cuenta":"0801199717121","Nombre":"Mauricio gomez"})
});

module.exports = router;

/*//Estructura de un modulo y uso de module.exports para exponer la funconalidad del modulo.
var mensaje="Hola Mundo";//JSON javascript objct notation

module.exports=mensaje;

libLencaFunctions.mensaje ="Mensaje";
libLencaFunctions.version ="v1.0";
libLencaFunctions.sayHello =()=>{
    console.log ("Hello!");
}//ES6

module.exports=libLencaFunctions;*/