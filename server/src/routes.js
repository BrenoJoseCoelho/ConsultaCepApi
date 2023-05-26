const express = require('express'); 
const router = express.Router(); 
const authCepController = require('./controller/AuthController');
const consultaCepController = require('./controller/ConsultaCepController.js');

router.get('/consultaendereco',authCepController.authenticateToken, consultaCepController.consultaEndereco);
router.post('/auth', authCepController.authenticateUser);



module.exports = router;