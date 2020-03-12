const entries = [];

const renderIndex = (req, res) => res.render('index', { entries });

// Ruta para generar el formulario
const renderNewEntry = (req, res) => res.render('new-entry');

// Ruta para procesar el formulario
const createNewEntry = (req, res) => {
  const newEntry = {
    titulo: req.body.titulo,
    nota: req.body.nota,
    fecha: new Date()
  };

  entries.push(newEntry);
  res.redirect('/');
};

module.exports = {
  renderIndex,
  renderNewEntry,
  createNewEntry
};
