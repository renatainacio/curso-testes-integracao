import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const response = await api.post("/users").send({
      email: "renata@renata.com",
      password: "123456"
    });
    expect(response.status).toBe(201);
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    await prisma.user.create({
      data: {
        email: "renata@renata.com",
        password: "123456"
      }
    })
    const response = await api.post("/users").send({
      email: "renata@renata.com",
      password: "12345"
    });
    expect(response.status).toBe(409);
  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const user = await prisma.user.create({
      data: {
        email: "renata@renata.com",
        password: "123456"
      }
    })
    const response = await api.get("/users");
    const { status, body } = response;
    expect(status).toBe(200);
    expect(body).toHaveLength(1);
    console.log(response.body);
    expect(body).toEqual([{
      email: "renata@renata.com"
    }])
  });

  it("should return 404 when can't find a user by id", async () => {
    const response = await api.get("/users/1");
    const { status } = response;
    expect(status).toBe(404);
  });

  it("should return all users", async () => {
    const user1 = await prisma.user.create({
      data: {
        email: "renata@renata.com",
        password: "123456"
      }
    })
    const user2 = await prisma.user.create({
      data: {
        email: "renata@email.com",
        password: "123456"
      }
    })
    const user3 = await prisma.user.create({
      data: {
        email: "email@renata.com",
        password: "123456"
      }
    })
    const user4 = await prisma.user.create({
      data: {
        email: "re@nata.com",
        password: "123456"
      }
    })
    const response = await api.get("/users");
    const { status, body } = response;
    expect(status).toBe(200);
    expect(body).toHaveLength(4);
    expect(body).toEqual([
      {
        email: "renata@renata.com",
      },
      {
        email: "renata@email.com",
      },
      {
        email: "email@renata.com",
      },
      {
        email: "re@nata.com",
      }
    ])
  });

})