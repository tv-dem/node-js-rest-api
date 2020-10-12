const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const create = user => usersRepo.create(user);

const getById = id => usersRepo.getById(id);

const updateById = (id, params) => usersRepo.updateById(id, params);

const deleteById = id => usersRepo.deleteById(id);

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};
