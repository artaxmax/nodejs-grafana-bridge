
var Configs = {
    sets: {},
    set: function (name, value) { this[name] = value },
    get: function (name) { return this[name] }
};
module.exports = Configs;

Configs.set('port', 3130);

Configs.set('username', 'user');
Configs.set('password', 'pass');