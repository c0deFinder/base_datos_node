const { agregarViaje, obtenerViajes } = require('./consultas')
const express = require('express');
const app = express();
app.use(express.json())

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Inicia el servidor en el puerto 3000


// Obtener todos los viajes
app.get('/travels', async (req, res) => {
    try {
        const travels = await obtenerViajes(); // Asumiendo que tienes esta función definida
        res.json(travels);
    } catch (error) {
        console.error('Error al obtener los viajes:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Agregar un nuevo viaje
app.post('/travels', async (req, res) => {
    try {
        const { destino, presupuesto } = req.body;
        await agregarViaje(destino, presupuesto); // Asumiendo que tienes esta función definida
        res.status(201).send('Viaje agregado con éxito');
    } catch (error) {
        console.error('Error al agregar el viaje:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Iniciar el servidor en el puerto especificado
const PORT = 4600;
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en [1](http://localhost):${PORT}`);
});