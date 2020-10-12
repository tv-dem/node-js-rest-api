const DB = {
  users: [],
  boards: [],
  tasks: [],
  getAll(TABLE_NAME) {
    return this[TABLE_NAME];
  },
  addNew(TABLE_NAME, obj) {
    this[TABLE_NAME].push(obj);
    return obj;
  },
  getById(TABLE_NAME, id) {
    return this[TABLE_NAME].find(el => el.id === id);
  },
  updateById(TABLE_NAME, id, newParams) {
    const index = this[TABLE_NAME].findIndex(el => el.id === id);
    this[TABLE_NAME][index].update(newParams);
    return this[TABLE_NAME][index];
  },
  deleteById(TABLE_NAME, id) {
    const deleted = this[TABLE_NAME].find(el => id === el.id);
    this[TABLE_NAME] = this[TABLE_NAME].filter(el => el.id !== id);
    return deleted;
  },
  getBoardTasks(id) {
    return this.tasks.filter(task => id === task.boardId);
  }
};

module.exports = {
  DB
};
