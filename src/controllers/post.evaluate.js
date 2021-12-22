const getSentiment = require('../helpers/nlp');

exports.evaluate = (req, res) => {
    const data = req.body.data
    console.log(data)
    const sentiment = getSentiment(data)
    return res.status(200).json({
        sentiment
    })
}