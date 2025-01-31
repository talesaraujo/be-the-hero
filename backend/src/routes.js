const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('./controllers/SessionController');
const NgoController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const router = express.Router();

router.post('/sessions', SessionController.create);

router.get('/ngos', NgoController.index);

router.post('/ngos', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), NgoController.create);

router.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object(
        {
            authorization: Joi.string().required()
        }
    ).unknown(),
}), ProfileController.index);

router.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    }),
}), IncidentController.index);

router.post('/incidents', IncidentController.create);

router.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), IncidentController.remove);

module.exports = router;
