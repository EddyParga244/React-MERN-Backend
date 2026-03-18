const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");

// Cargar variables de entorno
process.loadEnvFile();
const port = process.env.PORT;

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
