const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")
const {verifyToken, isAdmin} = require('./services/authJwt')

const {
    userRoutes,
    offerRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes,
    adminRoutes
} = require('./routes/index');

router.use(dataValidator)

router.use(authRoutes, offerRoutes)

router.use(verifyToken)
router.use([userRoutes, messageRoutes, bookingRoutes, commentRoutes ])
router.use(isAdmin, adminRoutes)


module.exports = router;
