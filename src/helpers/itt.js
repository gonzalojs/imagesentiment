const T = require('tesseract.js');

function getText(img) {
    // aqui debiera asegurarme de que img es una imagen

    T.recognize(img, 'eng', {
            logger: e => console.log(e)
        })
        .then(out => {
            const datas = out.data.text
            return datas
        })
}
