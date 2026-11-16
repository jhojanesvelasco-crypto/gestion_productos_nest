import mysql from 'mysql2/promise';

export let conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'gestion_productos'
});
