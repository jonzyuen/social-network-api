const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);

router
  .route('/:userId')
  .post(addThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(addReaction)

router
  .route('/:userId/:thoughtId')
  .delete(deleteThought)
  .put(updateThought)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;