const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")
const {verifyAccessToken, isAdmin} = require('./services/authJwt')
const redis = require("./services/cache")

const {
    userRoutes,
    offerRoutes,
    locationRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes,
    adminRoutes,
    uploadRoutes
} = require('./routes/index');

router.use(uploadRoutes)

router.use(redis, dataValidator)

router.use(authRoutes, offerRoutes, locationRoutes)

router.use(verifyAccessToken)
router.use([userRoutes, messageRoutes, bookingRoutes, commentRoutes ])
router.use(isAdmin, adminRoutes)


module.exports = router;
