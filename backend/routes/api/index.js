const router = require('express').Router(); //requires express then creates new router
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');

const sessionRouter = require('./session.js');
const usersRouter = require('./user.js');
const photosRouter = require('./photos.js');
const albumsRouter = require('./albums.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/photos', photosRouter);
router.use('/albums', albumsRouter);

// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

//testing middleware
// // GET /api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   }));

//   router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//       return res.json(req.user);
//     }
//   );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


module.exports = router;
