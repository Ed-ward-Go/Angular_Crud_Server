require('./database')
const app = require('./app')



app.listen(app.get('port'));

console.log("--Servidor corriendo en puerto--", app.get('port'));

