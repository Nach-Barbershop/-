import sqlite3 from "sqlite3";

const db = new sqlite3.Database("barberia.db");

// Crear la tabla si no existe antes de insertar datos
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS precios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      corte TEXT NOT NULL,
      precio TEXT NOT NULL
    )
  `);

  // Vaciar la tabla para evitar datos duplicados
  db.run("DELETE FROM precios");

  const stmt = db.prepare("INSERT INTO precios (corte, precio) VALUES (?, ?)");

  stmt.run("Corte Clásico", "$ 8.000");
  stmt.run("Fade / Degrade", "$ 10.000");
  stmt.run("Barba", "$ 8.000");
  stmt.run("Corte y Barba", "$ 14.000");

  stmt.finalize();
});

db.close();
console.log("Base de datos poblada con precios iniciales.");