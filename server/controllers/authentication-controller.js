var mongoose = require('mongoose');
var Users = require('../datasets/users');

module.exports.signup = function(req, res){
    //console.log(req.body);
    var user  = new User(req.body);
    user.save();
    
    res.json(req.body);
}