var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        if(friends.length < 5) {
            friends.push(req.body);
            res.json(true);
        } else {
            console.log("No more friends allowed!")
            res.json(false);
        }
    });

    app.post('api/clear', function(){
        friends = [];
        console.log(friends);
    });
}