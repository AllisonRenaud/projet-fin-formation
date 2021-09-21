const {Router} = require('express');
const router = Router();

const {
    userRoutes
} = require('./routes/index');

router.use(userRoutes)

// router.get('/test', (req, res) => {
//     res.json('Good !');
// })

module.exports = router;