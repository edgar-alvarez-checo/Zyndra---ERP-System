import app from "../../src/app";
import request from "supertest";

describe('GET /employees', ()=>{
    it('should return a list of employees with pagination info', async ()=>{
        const res = await request(app).get('/employees');

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
    });
});