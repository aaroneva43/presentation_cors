import express from 'express';
import path from 'path';

const app = express()
const port1 = 8777;
const port2 = 8778;
const port3 = 8779;


app.use('/', express.static(path.join(__dirname, 'static'), {
    setHeaders: function (res, path) {
        // if (res.socket.server._connectionKey.indexOf('8779')) {
        //     res.set("Access-Control-Allow-Origin", "https://www.xxx.com");
        //     res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        //     res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        //     res.set("X-Powered-By", ' 3.2.1')
        //     res.type("application/json");
        //     res.type("html");
        // }

    }
}));

app.get('/rest/test', function (req, res) {
    console.log(req);
    res.set("Access-Control-Allow-Origin", "https://www.google.com");
    res.send('this is a rest api response');
});

app.post('/rest/test', function (req, res) {
    res.set("Access-Control-Allow-Origin", "https://www.google.com");
    res.send('this is a rest api response -- POST');
});

app.put('/rest/test', function (req, res) {
    res.set("Access-Control-Allow-Origin", "https://www.google.com");
    
    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    res.send('this is a rest api response -- PUT');

});

app.options('/rest/test', function (req, res) {
    res.set("Access-Control-Allow-Origin", "https://www.google.com");
    res.set('Access-Control-Allow-Methods', 'PUT');

    res.send(200);

});

app.listen(port1, () => console.log(`Example app listening on port ${port1}!`));
app.listen(port2, () => console.log(`Example app listening on port ${port2}!`));
app.listen(port3, () => console.log(`Example app listening on port ${port3}!`));