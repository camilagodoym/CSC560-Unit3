//Import teAM Model
Team = require('./models/teammodel');

//For index
exports.index = function (req, res) {
    Team.get(function (err, team) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Team Successfully!",
            data: team       
        });
    });
};

//For creating new bio
exports.add = function (req, res) {
    var team = new Team();

    team.first_name = req.body.first_name? req.body.first_name: team.first_name;
    team.last_name = req.body.last_name;
    team.team =  req.body.team;
    team.minutes_playes = req.body.minutes_playes;
    team.goals = req.body.goals;
    team.assists = req.body.assists;
    team.yellow_cards = req.body.yellow_cards;
    team.red_card = req.body.red_card;
    team.pass = req.body.pass;
    team.aerialsWon = req.body.aerialsWon;
    team.man_of_the_match = req.body.man_of_the_match;
    team.rating = req.body.rating;
    team.shots_per_game = req.body.shots_per_game;
    	//Save and check error
    team.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: "New Information Added!",
            data: team
            });
        });
};

// View Team
exports.view = function (req, res) {
    Team.findById(req.params.team_id, function (err, team) {
        if (err)
            res.send(err);
        res.json({
            message: 'Info Details',
            data: team
        });
    });
};


// Update Team
exports.update = function (req, res) {
    Team.findById(req.params.team_id, function (err, team) {
        if (err)
            res.send(err);
            team.first_name = req.body.first_name;
            team.last_name = req.body.last_name;
            team.team =  req.body.team;
            team.minutes_playes = req.body.minutes_playes;
            team.goals = req.body.goals;
            team.assists = req.body.assists;
            team.yellow_cards = req.body.yellow_cards;
            team.red_card = req.body.red_card;
            team.pass = req.body.pass;
            team.aerialsWon = req.body.aerialsWon;
            team.man_of_the_match = req.body.man_of_the_match;
            team.rating = req.body.rating;
            team.shots_per_game = req.body.shots_per_game;
//save team check errors
        team.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "team Updated Successfully",
                data: team
            });
        });
    });
};
// Delete Bio
exports.delete = function (req, res) {
    Team.deleteOne({
        _id: req.params.team_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Team Deleted'
        })
    })
};


/*var jsonQuery = require('json-query')

var data = 'http://localhost:8080/api/team';

exports.query1 = function (req, res) {
    Team.get({
        "goals": req.params.query1
    }, function (err, team) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            
            jsonQuery('team[goals=1].first_name', {
                data: data
              })      
        });
    });
};*/