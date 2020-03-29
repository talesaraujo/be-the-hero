const db = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

const index = async (req, res) => {
    const ngos = await db('ngos').select('*');

    return res.json(ngos);
}

const create = async (req, res) => {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await db('ngos').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    });

    return res.json({ id });
}

module.exports = {
    index,
    create,
}
