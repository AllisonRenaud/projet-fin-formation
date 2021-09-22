const {Router} = require('express');
const router = Router();

const {
    userRoutes,
    offerRoutes,
    messageRoutes
} = require('./routes/index');

router.use(userRoutes, offerRoutes, messageRoutes)

// router.get('/test', (req, res) => {
//     res.json('Good !');
// })

module.exports = router;
