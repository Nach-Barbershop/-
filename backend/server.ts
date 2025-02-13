import * as express from "express";
import * as sqlite3 from "sqlite3";
import * as cors from "cors";

const app = express();
const PORT = 5000;

// Configurar CORS para permitir solicitudes del frontend
app.use(cors());
app.use(express.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database("barberia.db", (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos", err);
  } else {
    console.log("Conectado a SQLite");
  }
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS precios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    corte TEXT NOT NULL,
    precio TEXT NOT NULL
  )
`);

// Endpoint para obtener los precios
app.get("/precios", (req, res) => {
  db.all("SELECT * FROM precios", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint para actualizar un precio
app.put("/precios/:id", (req, res) => {
  const { id } = req.params;
  const { precio } = req.body;

  db.run("UPDATE precios SET precio = ? WHERE id = ?", [precio, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Precio actualizado correctamente" });
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});