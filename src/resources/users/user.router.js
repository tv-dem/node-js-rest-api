const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const newUser = await usersService.create(new User(req.body));
  res.json(User.toResponse(newUser));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateById(req.params.id, req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = await usersService.deleteById(req.params.id);
  if (deletedUser === undefined) res.status(404).send('sdfsf');
  else res.status(200).send('OK');
});

module.exports = router;
