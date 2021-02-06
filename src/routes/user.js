const router = require('express').Router();
const UserController = require('../controllers/user');
const passport = require('passport');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/forgotpassword', UserController.forgotpassword);
router.post('/reset-password', UserController.resetPassword);
router.post('/confirmation', UserController.confirmation);
router.post('/googlelogin', UserController.googlelogin);
router.post('/facebooklogin', UserController.facebooklogin);
router.get('/me', passport.authenticate('jwt', { session: false }), UserController.me);

module.exports = router;
