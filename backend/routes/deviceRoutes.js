const express = require('express');
const { getAllDevices, activateDevice } = require('../controllers/deviceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getAllDevices);
router.post('/:deviceId/activate', authMiddleware, activateDevice);

module.exports = router;