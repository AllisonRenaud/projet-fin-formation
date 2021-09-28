const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")
const {verifyToken, isAdmin} = require('./services/authJwt')
const redis = require("./services/cache")

const {
    userRoutes,
    offerRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes,
    adminRoutes
} = require('./routes/index');

router.use(redis, dataValidator)

router.use(authRoutes, offerRoutes)

router.use(verifyToken)
router.use([userRoutes, messageRoutes, bookingRoutes, commentRoutes ])
router.use(isAdmin, adminRoutes)


module.exports = router;
