const db = require('../database/connection');

const create = async (req, res) => {
    const { id } = req.body;

    const ngo = await db('ngos')
        .where('id', id)
        .select('name')
        .first();

    if (!ngo) {
        return res.status(404).json({ error: "No NGO found with given ID" });
    }

    return res.json(ngo);
}

module.exports = {
    create
}
