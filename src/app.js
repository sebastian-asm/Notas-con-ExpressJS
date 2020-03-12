const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  { createConnection } = require('./db');

const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // Se especifica a Express la ruta de las views
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // Obtener un dato que viene del cliente (ej. formulario) y parsearlo a JSON

// Rutas
app.use(require('./routes/entries.routes'));

// Error 404
app.use((req, res) => {
  res.status(404).render('404');
});

// Inicializar DB
createConnection();

// Inicializar App
app.listen(app.get('port'), () =>
  console.log(`Servidor en puerto ${app.get('port')}`)
);
