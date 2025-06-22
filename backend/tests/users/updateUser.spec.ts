import app from "../../src/app";
import request from "supertest";

describe('PATCH /users/:id', () => {
    it('should update a user by id', async () => {
    const res = await request(app)
        .patch('/users/083233a9-747e-440b-a096-6d40b2db49ab')
        .send({ username: "test12" });
    expect(res.status).toBe(200);
    });
})