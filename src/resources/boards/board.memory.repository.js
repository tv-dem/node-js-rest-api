const { DB } = require('../utils/DB');
const TABLE_NAME = 'boards';

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return DB.getAll(TABLE_NAME);
};

const create = async user => {
  return DB.addNew(TABLE_NAME, user);
};

const getById = async id => {
  return DB.getById(TABLE_NAME, id);
};

const updateById = async (id, params) => {
  return DB.updateById(TABLE_NAME, id, params);
};

const deleteById = async id => {
  return DB.deleteById(TABLE_NAME, id);
};

module.exports = {
  getAll,
  create,
  getById,
  updateById,
  deleteById
};
