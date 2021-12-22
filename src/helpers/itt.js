const T = require('tesseract.js');

module.exports = function getText(img, leng) {
    // aqui debiera asegurarme de que img es una imagen

    T.recognize(img, leng, {
            logger: e => console.log(e)
        })
        .then(out => {
            return out.data.text
        })
}
