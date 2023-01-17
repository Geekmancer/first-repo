const express = require('express');
const qr = require('qr-image');
const app = express();

app.get('api/v1/qr', (req, res) => {
    let url = req.query.url;
    if (!url) {
        return res.status(400).send('Please provide a URL as a query parameter.');
    }

    let qr_svg = qr.image(url, { type: 'png' });
    res.type('png');
    qr_svg.pipe(res);
});

// Auto download
// app.get('/qr', (req, res) => {
//     let url = req.query.url;
//     if (!url) {
//         return res.status(400).send('Please provide a URL as a query parameter.');
//     }

//     let qr_svg = qr.image(url, { type: 'png' });
//     res.setHeader('Content-Disposition', 'attachment; filename="qr.png"');
//     res.type('png');
//     qr_svg.pipe(res);
// });

// Auto download
// app.get('/qr', (req, res) => {
//     let url = req.query.url;
//     let fileName = req.query.fileName;
//     if (!url) {
//         return res.status(400).send('Please provide a URL as a query parameter.');
//     }

//     let qr_svg = qr.image(url, { type: 'png' });
//     res.setHeader('Content-Disposition', `attachment; filename=${fileName}.png`);
//     res.type('png');
//     qr_svg.pipe(res);
// });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
