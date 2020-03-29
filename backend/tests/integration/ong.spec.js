const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/database/connection');

describe('NGO', () => {

    beforeEach(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    afterAll(async () => {
        await db.destroy();
    });

    it('should be able to create a new NGO', async () => {
        const response = await request(app)
            .post('/ngos')
            .send({
                name: "ASTEF",
                email: "astef@asf.org",
                whatsapp: "0123456789",
                city: "Campina Grande",
                uf: "PB"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});
