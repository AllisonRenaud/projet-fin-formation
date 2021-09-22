const {Router} = require('express');
const router = Router();

const {
    userRoutes,
    offerRoutes,
    messageRoutes,
    bookingRoutes,
    commentRoutes
} = require('./routes/index');

router.use(userRoutes, offerRoutes, messageRoutes, bookingRoutes, commentRoutes)

// router.get('/test', (req, res) => {
//     res.json('Good !');
// })

module.exports = router;
