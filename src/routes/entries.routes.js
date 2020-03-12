const { Router } = require('express'),
  router = Router(),
  {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    deleteEntry
  } = require('../controllers/entries.controllers');

router.get('/', renderIndex);
router.get('/new-entry', renderNewEntry);
router.post('/new-entry', createNewEntry);
router.get('/entry/:id', deleteEntry);

module.exports = router;
