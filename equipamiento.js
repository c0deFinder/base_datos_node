const { Pool } = require('pg');

// Create a connection pool
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'newpassword',
    database: 'postgres',
    allowExitOnIdle: true,
});

// Get the current timestamp from the database
const getDate = async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Current timestamp:', result.rows[0].now);
    } catch (error) {
        console.error('Error fetching timestamp:', error.message);
    }
};

// Insert a new row into the 'psql.equipamiento' table
const agregarEquipaje = async (nombre) => {
    try {
        const consulta = 'INSERT INTO psql.equipamiento (nombre) VALUES ($1)';
        const values = [nombre]; // Only one value for the 'nombre' column
        await pool.query(consulta, values);
        console.log('Equipaje agregado');
    } catch (error) {
        console.error('Error adding equipaje:', error.message);
    }
};

// Call the corrected function
agregarEquipaje( 'Ruster');

const obtenerEquipaje = async () => {
    const { rows } = await pool.query("SELECT * FROM psql.equipamiento")
    console.log(rows)
    return rows
    }
    obtenerEquipaje()


