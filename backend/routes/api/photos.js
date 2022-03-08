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

// //get single photo
// router.get('/:id', asyncHandler(async (req, res) => {
//   const onePhoto = await Photo.findOne(id);

// }));

// //get user photos
// router.get('/', restoreUser, asyncHandler(async (req, res) => {
//   const { user } = req;
//   const userPhotos = await Photo.findByPk({ include: userId});
// }))


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
// router.put('/:id', restoreUser, validatePhotoInfo, asyncHandler(async (req, res) => {
//   const { user } = req;
//   const { title, imageUrl, content } = req.body;
//   const photo = await Photo.
// }));

module.exports = router;
