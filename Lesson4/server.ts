import express from "express";
import { addTask, loadTasks } from "./tasks.ts";

const app = express();
app.use(express.json());
app.listen(8000, () => {
  console.log("Server is running on Http://localhost:8000");
});

//// MIDDLEWARE
app.use((request, response, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} ${request.method} ${request.originalUrl}`);
  next();
});

app.use((request, response, next) => {
    if (request.method === 'POST') {
        console.log(request.body);
    }
    next();
  });
  //// MIDDLEWARE

//// PING
app.get("/ping", (request, response) => {
  response.send("pong");
});

//// TASKS
app.get("/tasks", (request, response) => {
  const tasks = loadTasks();
  response.json(tasks);
});

//// ADD
app.post("/tasks", (request, response) => {
  const { task } = request.body as { task: string };
  addTask(task);

  response.send("jamm");
});
