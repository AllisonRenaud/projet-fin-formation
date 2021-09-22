const {Router} = require('express');
const router = Router();

const {
    userRoutes,
    offerRoutes
} = require('./routes/index');

router.use(userRoutes, offerRoutes)

// router.get('/test', (req, res) => {
//     res.json('Good !');
// })

module.exports = router;
