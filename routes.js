//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Bio Controller
var teamController = require('./teamController');
// Bio routes
router.route('/team')
    .get(teamController.index)
    .post(teamController.add);
    
router.route('/team/:team_id')
    .get(teamController.view)
    .patch(teamController.update)
    .put(teamController.update)
    .delete(teamController.delete);

/*router.route('/team/query1')
    .get(teamController.query1);
*/
//Export API routes
module.exports = router;