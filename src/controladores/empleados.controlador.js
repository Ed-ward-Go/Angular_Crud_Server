
const empleadoCtrl = {}

const Empleado = require('../modelos/Empleado')

empleadoCtrl.getEmpleados = async (req, res) => {
const empleados = await Empleado.find()
res.json(empleados)
}

empleadoCtrl.createEmpleado = async (req, res) => {
    const newEmpleado = new Empleado(req.body)
    await newEmpleado.save()
    res.send({message: 'empleado creado'})
}

empleadoCtrl.getEmpleado = async (req, res) => {
 const empleado = await Empleado.findById(req.params.id)
    res.send(empleado)
}

empleadoCtrl.editEmpleado = async (req, res) => {
await Empleado.findByIdAndUpdate(req.params.id, req.body)
res.send({status: 'empleado actualizado'})
}

empleadoCtrl.deleteEmpleado = async (req, res) => {
await Empleado.findByIdAndRemove(req.params.id)
res.json({status: 'empleado eliminado'})
}


module.exports = empleadoCtrl; 