const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const create = user => tasksRepo.create(user);

const getById = id => tasksRepo.getById(id);

const updateById = (id, params) => tasksRepo.updateById(id, params);

const deleteById = id => tasksRepo.deleteById(id);

const getBoardTasks = params => tasksRepo.getBoardTasks(params);

module.exports = {
  getBoardTasks,
  getAll,
  create,
  getById,
  updateById,
  deleteById
};
