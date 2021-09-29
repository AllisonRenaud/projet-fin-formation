const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")
const {verifyAccessToken, isAdmin} = require('./services/authJwt')
const redis = require("./services/cache")

const {
    userRoutes,
    offerRoutes,
    locationRoutes,
    uploadRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes,
    adminRoutes
} = require('./routes/index');

router.use(redis, dataValidator)

router.use(authRoutes, offerRoutes, locationRoutes)

router.use(verifyAccessToken)
router.use([userRoutes, messageRoutes, bookingRoutes, commentRoutes, uploadRoutes ])
router.use(isAdmin, adminRoutes)


module.exports = router;
