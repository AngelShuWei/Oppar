const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Photo } = require('../../db/models'); //if destructure here, don't need to type db.create later

const validatePhotoInfo = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please input a title.') // need this line because .length({max:}) and not .length({min:})
    .isLength({ max: 50 })
    .withMessage('Photo title can be max 50 characters.'),
  check('imageUrl')
    .exists({ checkFalsy: true })
    .withMessage('Please input an image url link.')
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Needs to be a valid imageUrl'),
  handleValidationErrors //runs through validation in utils then sends to 3rd err handler
];

//get all photos
router.get('/', asyncHandler(async (req, res) => {
  const allPhotos = await Photo.findAll();
  return res.json({allPhotos});
}));

//upload photo
router.post('/', restoreUser, validatePhotoInfo, asyncHandler(async (req, res) => {
  const { user } = req;
  const { title, imageUrl, content } = req.body;
  const photo = await Photo.create({
    userId: user.id,
    title,
    imageUrl,
    content
  });

  return res.json({photo});
}));

//update photo
// router.put('/:photoId', restoreUser, validatePhotoInfo, asyncHandler(async (req, res) => {
//   const { user } = req;
//   const { title, imageUrl, content } = req.body;
//   const photo = await Photo.update(req.body, {
//     userId: user,id,
//     title,
//     imageUrl,
//     content
//   })
//   return res.json({photo});
// }));

//delete a photo
router.delete('/:photoId', asyncHandler(async function (req, res) {
  //do i need to parseint the params first? to make into integer
  const photo = await Photo.findByPk(req.params.photoId); //finds what the id of the photo is from the route
  if (!photo) throw new Error('Cannot find photo')

  await photo.destroy();
  return res.json(photo.id);
}))

module.exports = router;
