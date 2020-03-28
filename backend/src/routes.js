const express = require('express');

const SessionController = require('./controllers/SessionController');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const router = express.Router();

router.post('/sessions', SessionController.create);

router.get('/ngos', NgoController.index);
router.post('/ngos', NgoController.create);

router.get('/profile', ProfileController.index);

router.get('/incidents', IncidentController.index);
router.post('/incidents', IncidentController.create);
router.delete('/incidents/:id', IncidentController.remove);

module.exports = router;
