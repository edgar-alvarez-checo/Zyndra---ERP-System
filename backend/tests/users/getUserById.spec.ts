import app from "../../src/app";
import request from "supertest";

describe('GET /users/:id', () => {
    it('should return a user by id', async ()=>{
        const res = await request(app).get('/users/083233a9-747e-440b-a096-6d40b2db49ab');
        expect(res.status).toBe(200);
        expect(res.body.id).toBeDefined();
    })
})