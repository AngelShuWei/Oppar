const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
// const { check } = require('express-validator');
// const { handleValidationErrors } = require('../../utils/validation');
const { Like, Photo } = require('../../db/models');

router.get('/', asyncHandler(async(req, res) => {
  const allLikes = await Like.findAll({
    include: Photo
  });
  return res.json({allLikes});
}))

router.post('/', restoreUser, asyncHandler(async(req, res) => {
  const { user } = req;
  const { photoId } = req.body;

  const like = await Like.create({
    userId: user.id,
    photoId,
  });

  return res.json({like});
}));

router.delete('/:likeId', asyncHandler(async (req, res) => {
  const like = await Like.findByPk(req.params.likeId);
  if (!like) throw new Error('Cannot find like');

  await like.destroy();
  return res.json(like.id);
}))


module.exports = router;
