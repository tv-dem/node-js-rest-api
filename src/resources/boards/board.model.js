const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'board', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
  update({ title = this.title, order = this.order } = {}) {
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = [];
    columns.forEach(el => this.columns.push(new Column(el)));
  }
  update(params) {
    if (params.title !== undefined) this.title = params.title;
    if (params.columns !== undefined) {
      params.columns.forEach(newCol => {
        const i = this.columns.findIndex(el => el.id === newCol.id);
        if (i > -1) this.columns[i].update(newCol);
      });
    }
  }

  static toResponse(board) {
    return board;
  }
}

module.exports = Board;
