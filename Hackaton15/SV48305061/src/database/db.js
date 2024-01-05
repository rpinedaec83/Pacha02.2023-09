const mysql = require('mysql2/promise')

const conexion = mysql.createPool({
    host: 'localhost',
    port: process.env.portdatabase,
    user: 'root',
    password: 'Castillo0*',
    database: 'hackaton15',
});
conexion.getConnection(function (err) {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado exitosamente a la base de datos');
});

conexion.query('create table  IF NOT EXISTS servisMenssage (id int NOT NULL primary KEY auto_increment, usuario varchar(255),destino varchar(255),mensaje varchar(600),ubicacion varchar(255))'), function (erro, results) {
    if (erro) {
        console.error('Error al crear la tabla:', erro);
    } else {
        console.log('Tabla creada:', results);
    }
}
module.exports = conexion;
