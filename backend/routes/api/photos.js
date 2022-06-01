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
    .isURL()
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
  let { title, imageUrl, album, content } = req.body;

  if (parseInt(album, 10) === -1 ) album = null;

  const photo = await Photo.create({
    userId: user.id, //trying to figure out who owned it so need to set value
    title,
    imageUrl,
    albumId: album, //KEY needs to match database
    content
  });
  return res.json({photo});
}));

// update photo
router.put('/:photoId', restoreUser, validatePhotoInfo, asyncHandler(async (req, res) => {
  const { user } = req; //dont need user because alrdy know which user submitted the intial form
  const { photoId } = req.params; // const photoId = req.params.photoId alternative way without destructuring
  let { title, imageUrl, album, content, id} = req.body; //can pull photoId from params if want to

  if (parseInt(album, 10) === -1 ) album = null;

  const photo = await Photo.findByPk(parseInt(photoId, 10));

  await photo.update({  //keying into the photo
    title, // don't need userId: user.id because owner has already been eastablished during create feature
    imageUrl,
    albumId: album,
    content
  })
  return res.json({photo});
}));

//delete a photo
router.delete('/:photoId', asyncHandler(async (req, res) => {
  //do i need to parseint the params first? to make into integer
  const photo = await Photo.findByPk(req.params.photoId); //finds what the id of the photo is from the route

  if (!photo) throw new Error('Cannot find photo');

  await photo.destroy();
  return res.json(photo.id);
}))

module.exports = router;
