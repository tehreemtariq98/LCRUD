const user = require('../models/user.model');


exports.test = function (req, res) {
    res.send('Test controller!');
};

exports.user_create = function (req, res,err) {
    let user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: rep.body.password,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    })
};

exports.user_details = function (req, res,err) {
    User.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res,err) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('user udpated.');
    });
};

exports.user_delete = function (req, res,err) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};