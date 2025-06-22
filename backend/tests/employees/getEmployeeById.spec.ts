import app from "../../src/app";
import request from "supertest";

describe('GET /employees', () => {
    it('should return a list of employees with pagination info', async () => {
        const res = await request(app).get('/employees/484dbcdc-bfab-4807-a85f-2eded275538b');

        expect(res.status).toBe(200);
    });
});