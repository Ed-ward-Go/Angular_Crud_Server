const {Schema, model} = require('mongoose')

const empleadoSchema = new Schema ({
    nombre: {type: String, required: true},
    cargo: {type: String, required: true},
    oficina: {type: String, required: true},
    salario: {type: Number, required: true},
}, {
    timestamps: true,
    versionKey: false

})

module.exports = model('Empleado', empleadoSchema)