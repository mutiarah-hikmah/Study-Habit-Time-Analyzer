const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/data', userController.getAllData);
router.post('/jadwal', userController.addJadwal);
router.post('/rekomendasi', userController.generateRekomendasi);

module.exports = router;
