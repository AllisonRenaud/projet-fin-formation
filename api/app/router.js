const {Router} = require('express');
const router = Router();
const dataValidator = require("./services/dataValidator")

const {
    userRoutes,
    offerRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes,
    authRoutes
} = require('./routes/index');


router.use(dataValidator)
router.use([userRoutes, offerRoutes, messageRoutes, bookingRoutes, commentRoutes, authRoutes])


module.exports = router;
