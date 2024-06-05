const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.get('/', citaController.list );
router.post('/add', citaController.save);
router.get('/delete/:idcita', citaController.delete);

router.get('/update/:idcita', citaController.edit);
router.post('/update/:idcita', citaController.update);
module.exports = router;