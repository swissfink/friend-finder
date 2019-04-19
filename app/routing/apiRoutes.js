var newFriend = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function(req, res) {
        res.json(newFriend);
    });

    app.post('/api/friends', function (req, res) {
        if(newFriend) {

            // When there is a new entry, compare this latest entry's score against the scores of entire array of friends.

            // get the difference between each score for each question.

            // push the score with the least difference back to the survey file to eb displayed.
           
            newFriend.push(req.body);

            res.json(true);

        } else {
            alert("Please fill in all the fields before submitting the form.")
            res.json(false);
        }
    });
}


