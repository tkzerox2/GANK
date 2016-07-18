var app = require('express')();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7789;

/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Fuck you</h1>');
});

app.post('/testpost', function (req, res) {
    var json = req.body;
    console.log(json);
    res.send('Add new ' + json.name + ' Completed!');
});

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
