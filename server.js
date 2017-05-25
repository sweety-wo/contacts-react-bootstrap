var express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/client'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(app.get('port'), function () {
    console.log("Image Map running at http://localhost:" + app.get('port'));
});
