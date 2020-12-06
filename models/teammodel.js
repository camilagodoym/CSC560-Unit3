var mongoose = require('mongoose');
//schema
var teamSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
  },
    team: {
      type: String,
      required: true
  },
    minutes_playes: {
      type: Number,
      required: true
  },
    goals: {
      type: Number,
      required: true
  },
    assists: {
      type: Number,
      required: true
  },
    yellow_cards: {
    type: Number,
    required: true
  },
  red_card: {
    type: Number,
    required: true
  },
  pass: {
    type: Number,
    required: true
  },
  aerialsWon: {
    type: Number,
    required: true
  },
  man_of_the_match: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  shots_per_game: {
      type: Number,
      required: true
  
  }
  });
// Export Bio Model
var Team = module.exports = mongoose.model('team', teamSchema);
module.exports.get = function (callback, limit) {
   Team.find(callback).limit(limit); 
}