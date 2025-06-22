import app from "../../src/app";
import request from "supertest";

describe('PATCH /employees/:id', () => {
    it('should update a employee by id', async () => {
    const res = await request(app)
        .patch('/employees/484dbcdc-bfab-4807-a85f-2eded275538b')
        .send({ username: "test12" });
    expect(res.status).toBe(200);
    });
})