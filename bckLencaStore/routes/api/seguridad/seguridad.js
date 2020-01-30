var express = require('express');
var router = express.Router();
var userModel = require('./seguridad.model');

//HTTP  GET  POST PUT DELETE
/* get botener  -> select -> consulta
            filtro - parametro// dentro del uri
   post crear ->insert -> agregar
            datos // dentro del body del requeri
   put actualizar ->update ->modificar o actualizar un recurso
            filtro - paramentros // dentro del uri
   delete eliminar ->delete ->eliminar un recurso
            filtro - parametros // dentro del uri
*/

//crear un modelo de datos para la entidad

//CRUD 
//http://localhost:3000/api/seguidad/users/all
//obtener todo los registros de usuario
router.get('/users/all',(req, res)=>{
    return res.status(200).json(userModel.getAll());
});//get users/alll

router.get('/users/:id',(req,res)=>{
  var id = parseInt(req.params.id);
  var user = userModel.getById(id);
  return res.status(200).json(user);
});

module.exports = router;