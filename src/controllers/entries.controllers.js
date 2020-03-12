const { getConnection } = require('../db');
const { v4 } = require('uuid'); // Modulo para generar ID automaticamente

const renderIndex = (req, res) => {
  // Obtener notas de la DB
  const entries = getConnection()
    .get('entries')
    .value();

  res.render('index', { entries });
};

// Ruta para generar el formulario
const renderNewEntry = (req, res) => res.render('new-entry');

// Ruta para procesar el formulario
const createNewEntry = (req, res) => {
  const newEntry = {
    id: v4(),
    titulo: req.body.titulo,
    nota: req.body.nota,
    fecha: new Date()
  };

  // Guardando en la DB
  getConnection()
    .get('entries')
    .push(newEntry)
    .write();

  res.redirect('/');
};

// Peticion para eliminar nota
const deleteEntry = (req, res) => {
  const id = req.params.id;

  getConnection()
    .get('entries')
    .remove({ id })
    .write();

  res.redirect('/');
};

module.exports = {
  renderIndex,
  renderNewEntry,
  createNewEntry,
  deleteEntry
};
