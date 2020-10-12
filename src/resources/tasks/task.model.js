const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'title',
    description = '',
    userId = '', // assignee
    boardId = '',
    columnId = '',
    order = ''
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId; // assignee
    this.boardId = boardId;
    this.columnId = columnId;
  }

  // update({
  //   name = this.name,
  //   login = this.login,
  //   password = this.password
  // } = {}) {
  //   this.name = name;
  //   this.login = login;
  //   this.password = password;
  // }

  static toResponse(task) {
    return task;
  }
}

module.exports = Task;
