const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const create = board => boardRepo.create(board);

const getById = id => boardRepo.getById(id);

const updateById = (id, params) => boardRepo.updateById(id, params);

const deleteById = id => boardRepo.deleteById(id);

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};
