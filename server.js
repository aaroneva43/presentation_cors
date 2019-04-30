import express from 'express';
import path from 'path';

const app = express()
const port1 = 8777;
const port2 = 8778;


app.use('/', express.static(path.join(__dirname, 'static')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(path.resolve(__dirname, 'static') + '/index.html'));
// });

app.listen(port1, () => console.log(`Example app listening on port ${port1}!`));
app.listen(port2, () => console.log(`Example app listening on port ${port2}!`));