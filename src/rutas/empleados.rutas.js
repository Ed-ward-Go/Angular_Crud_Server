const {Router} = require('express')
const empleadoCtrl = require('../controladores/empleados.controlador')
const router = Router()


//RUTAS CRUD

router.get('/', empleadoCtrl.getEmpleados);

router.post('/', empleadoCtrl.createEmpleado);

router.get('/:id', empleadoCtrl.getEmpleado);

router.put('/:id', empleadoCtrl.editEmpleado);

router.delete('/:id', empleadoCtrl.deleteEmpleado);

module.exports = router
