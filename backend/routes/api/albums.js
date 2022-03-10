const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Album } = require('../../db/models'); //if destructure here, don't need to type db.create later

const validateAlbumInfo = [
  check('title')
    .exists({ checkFalsy: true }) //checkFalsy: true means fields wtih falsy values (0, flasy, null) will NOT exist
    .withMessage('Please input a title.') // need this line because .length({max:}) and not .length({min:})
    .isLength({ max: 50 })
    .withMessage('Album title can be max 50 characters.'),
  check('imageUrl')
    .exists({ checkFalsy: false }) //making it optional to input imageURL
    .withMessage('Please input an image url link.')
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Needs to be a valid imageUrl'),
  handleValidationErrors //runs through validation in utils then sends to 3rd err handler
];

//get all albums
router.get('/', asyncHandler(async (req, res) => {
  const allAlbums = await Album.findAll();
  return res.json({allAlbums});
}));

module.exports = router;
