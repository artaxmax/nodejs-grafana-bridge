

var Configs = require('./config');

module.exports = {
    use: function (req, res) {
        var header = req.header('authorization');
        if (header) {
            var auth = (new Buffer(header.split(' ')[1], 'base64')).toString().split(':');
            console.log(Configs.get('username'));
            console.log(auth[0]);
            console.log(Configs.get('password'));
            console.log(auth[1]);
            if (Configs.get('username') != auth[0] || Configs.get('password') != auth[1]) {
                res.status(403).end('Forbidden');
            } else {
                res.status(200).send('OK');
            }
        } else {
            res.status(403).end('Forbidden');
        }
    }
};