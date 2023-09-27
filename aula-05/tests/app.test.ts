import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
})

describe("API test", () => {
  it("should return an error with status code 400 for non numeric elements", async () => {
    const { status } = await api.get("/fibonacci?elements=n");
    expect(status).toBe(400);
  })
})

describe("API test", () => {
  it("should return an error with status code 400 for elements lower than 1", async () => {
    const { status } = await api.get("/fibonacci?elements=0");
    expect(status).toBe(400);
  })
})

describe("API test", () => {
  it("should return the correct fibonacci sequence for one element /fibonacci", async () => {
    const { status, body } = await api.get("/fibonacci?elements=1");
    expect(status).toBe(200);
    expect(body).toHaveLength(2);
    expect(body).toEqual([0, 1]);
  })
})

describe("API test", () => {
  it("should return the correct fibonacci sequence for two elements /fibonacci", async () => {
    const { status, body } = await api.get("/fibonacci?elements=2");
    expect(status).toBe(200);
    expect(body).toHaveLength(2);
    expect(body).toEqual([0, 1]);
  })
})

describe("API test", () => {
  it("should return the correct fibonacci sequence for three elements /fibonacci", async () => {
    const { status, body } = await api.get("/fibonacci?elements=3");
    expect(status).toBe(200);
    expect(body).toHaveLength(3);
    expect(body).toEqual([0, 1, 1]);
  })
})

describe("API test", () => {
  it("should return the correct fibonacci sequence for twelve elements /fibonacci", async () => {
    const { status, body } = await api.get("/fibonacci?elements=12");
    expect(status).toBe(200);
    expect(body).toHaveLength(12);
    expect(body).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  })
})