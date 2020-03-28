const db = require('../database/connection');

const index = async (req, res) => {
    const ngo_id = req.headers.authorization;

    const incidents = await db('incidents')
        .where('ngo_id', ngo_id)
        .select('*');

    return res.json(incidents);
}

module.exports = {
    index
}
