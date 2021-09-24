const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")
const {verifyToken} = require('./services/authJwt')

const {
    userRoutes,
    offerRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes
} = require('./routes/index');

router.use(dataValidator)
router.use(authRoutes)

router.use(verifyToken)
router.use([userRoutes, offerRoutes, messageRoutes, bookingRoutes, commentRoutes ])


module.exports = router;
