const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/boards/:id/tasks').get(async (req, res) => {
  const tasks = await tasksService.getBoardTasks(req.params.id);
  res.json(tasks.map(task => Task.toResponse(task)));
});

router.route('/boards/:id/tasks').post(async (req, res) => {
  req.body.boardId = req.params.id;
  const newTask = await tasksService.create(new Task(req.body));
  res.json(Task.toResponse(newTask));
});

router.route('/boards/:Bid/tasks/:Tid').get(async (req, res) => {
  const tasks = await tasksService.getBoardTasks(req.params.Bid);

  const task = tasks.find(el => el.id === req.params.Tid);
  res.json(Task.toResponse(task));
});

router.route('/boards/:Bid/tasks/:Tid').delete(async (req, res) => {
  const tasks = await tasksService.getBoardTasks(req.params.Bid);
  const task = tasks.find(el => el.id === req.params.Tid);
  const d = await tasksService.deleteById(task.id);
  console.log(d);
  if (d) res.status(204).send('OK');
  else {
    res.status(404).send('Not found');
  }
});

module.exports = router;
