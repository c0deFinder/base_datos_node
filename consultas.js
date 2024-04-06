const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: 'newpassword',
database: 'postgres',
allowExitOnIdle: true
})
const getDate = async () => {
const result = await pool.query("SELECT NOW()")
console.log(result)
}
getDate()

const agregarViaje = async (destino, presupuesto) => {
    const consulta = "INSERT INTO psql.travels values (DEFAULT, $1, $2)"
    const values = [destino, presupuesto]
    const result = await pool.query(consulta, values)
    console.log("Viaje agregado")
    }
    agregarViaje("Moscu", 3400)

    const obtenerViajes = async () => {
        const { rows } = await pool.query("SELECT * FROM psql.travels")
        console.log(rows)
        return rows
        }
        obtenerViajes()

        module.exports = { agregarViaje, obtenerViajes }