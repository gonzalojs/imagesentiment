const {
    Router
} = require('express');
const router = Router()

const evaluateTextController = require('../controllers/post.evaluate')

router.post('/evaluate', evaluateTextController.evaluate)

module.exports = router