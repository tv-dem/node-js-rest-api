const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  console.log('oke');
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  console.log('oke');
  const board = await boardService.getById(req.params.id);
  res.json(Board.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const newBoard = await boardService.create(new Board(req.body));
  res.json(Board.toResponse(newBoard));
});

router.route('/:id').put(async (req, res) => {
  const updatedBoard = await boardService.updateById(req.params.id, req.body);
  res.json(Board.toResponse(updatedBoard));
});

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await boardService.deleteById(req.params.id, req.body);
  res.json(Board.toResponse(deletedBoard));
});

module.exports = router;
