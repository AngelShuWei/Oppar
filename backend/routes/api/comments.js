const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Album, Photo, Comment} = require('../../db/models');

const validateCommentInfo = [
  check('comment')
    .exists({ checkFalsy: true }) //checkFalsy: true means fields wtih falsy values (0, flasy, null) will NOT exist
    .withMessage('Please input a comment.'), // need this line because .length({max:}) and not .length({min:})
  handleValidationErrors //runs through validation in utils then sends to 3rd err handler
];

//get all comments
router.get('/', asyncHandler(async (req, res) => {
  const allComments = await Comment.findAll();
  return res.json({allComments});
}));

//upload comment
router.post('/', restoreUser, validateCommentInfo, asyncHandler(async (req, res) => {
  const { user } = req;
  const { comment, photoId } = req.body;

  const userComment = await Comment.create({
    userId: user.id,
    comment,
    photoId,
  });

  return res.json({userComment});
}));

//update comment
router.put('/:commentId', validateCommentInfo, asyncHandler(async(req, res) => {
  let { commentId } = req.params;

  let { comment } = req.body;
  console.log(req.body, 'this is req.body');

  const userComment = await Comment.findByPk(+commentId);

  await userComment.update({
    comment,
  });

  console.log(comment, "hehehehe")

  return res.json({userComment});
}))

//delete comment
router.delete('/:commentId', asyncHandler(async (req, res) => {
  const comment = await Comment.findByPk(req.params.commentId);
  if (!comment) throw new Error('Cannot find comment');

  await comment.destroy();
  return res.json(comment.id);
}));

module.exports = router;
