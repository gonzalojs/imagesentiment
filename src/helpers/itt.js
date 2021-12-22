const T = require('tesseract.js');

T.recognize('src/Capture.PNG', 'eng', {
        logger: e => console.log(e)
    })
    .then(out => {
        console.log(out.data.text)
    })