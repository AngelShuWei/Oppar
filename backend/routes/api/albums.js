const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Album, Photo} = require('../../db/models'); //if destructure here, don't need to type db.create later

const validateAlbumInfo = [
  check('title')
    .exists({ checkFalsy: true }) //checkFalsy: true means fields wtih falsy values (0, flasy, null) will NOT exist
    .withMessage('Please input a title.') // need this line because .length({max:}) and not .length({min:})
    .isLength({ max: 50 })
    .withMessage('Album title can be max 50 characters.'),
  handleValidationErrors //runs through validation in utils then sends to 3rd err handler
];

//get all albums
router.get('/', asyncHandler(async (req, res) => {
  const allAlbums = await Album.findAll();
  return res.json({allAlbums});
}));

//upload album
router.post('/', restoreUser, validateAlbumInfo, asyncHandler(async (req, res) => {
  const { user } = req;
  const { title, imageUrl, content } = req.body;
  const album = await Album.create({
    userId: user.id,
    title,
    imageUrl,
    content
  });

  return res.json({album});
}));

// update album
router.put('/:albumId', restoreUser, validateAlbumInfo, asyncHandler(async (req, res) => {
  const { user } = req;
  const { albumId } = req.params;
  const { title, imageUrl, content, id} = req.body;
  const album = await Album.findByPk(parseInt(albumId, 10));
  await album.update({
    title,
    imageUrl,
    content
  })
  return res.json({album});
}));

//delete an album
router.delete('/:albumId', asyncHandler(async function (req, res) {
  const album = await Album.findByPk(req.params.albumId); //getting current album obj
  const photos = await Photo.findAll({ //get all photos associated with album
    where: {  //where is a matching...
      albumId: album.id //saying if albumId === album.id
    }
  });

  for await (const photo of photos ) { //for await is saying await for this entire loop. can only apply this on FOR OF
    photo.albumId = null; //have photo inside of photos and now we're keying into albumId of that photo and we're setting it to null to dissociate it
    await photo.save(); //after whole proces above happens, then save the database
  }

  if (!album) throw new Error('Cannot find album');

  await album.destroy();
  return res.json(album.id);
}))

module.exports = router;
