const express = require("express");
const app = express();
const cors = require("cors");
const tasks = [];

app.use(express.json());
app.use(cors());

app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const task = { ...req.body, id: Math.floor(Math.random() * 100000) };
  tasks.push(task);
  return res.json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((e) => e.id === +req.params.id);
  const task = tasks[index];
  if (index > -1) {
    tasks[index] = { ...tasks[index], ...req.body };
  }
  return res.json({ task });
});

app.delete("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((e) => e.id === +req.params.id);
  const task = tasks[index];
  if (index > -1) {
    tasks.splice(index, 1);
  }
  return res.json({ task });
});

app.listen(3000);
