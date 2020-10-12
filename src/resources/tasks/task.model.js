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

  update({
    id = uuid(),
    title = 'title',
    order = 'order',
    description = 'description',
    userId = 'userId', // assignee
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId; // assignee
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    return task;
  }
}

module.exports = Task;
