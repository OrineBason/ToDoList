const app = require( '../server.js');

describe("POST /tasks", () => {
    test("It responds with the newly created task", async () => {
      const newTask = await request(app)
        .post("/tasks")
        .send({
            title:"new", description:"post"
        });

      expect(newTask.body).toHaveProperty("id");
      expect(newTask.body.title).toBe("new");
      expect(newTask.statusCode).toBe(200);
  
      const response = await request(app).get("/students");
      expect(response.body.title).toContain("new");
    });
  });
