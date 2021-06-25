var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

//attributes of match (schema) 
var matchSchema = mongoose.Schema({
  city: String,
  date: { type: Date, default: Date.now },
  teamA: String,
  teamB: String,
  
});
var Match = mongoose.model("Match", matchSchema);

function validateMatch(data) {
  const schema = Joi.object({
    city: Joi.string().min(3).required(),
    date: Joi.types.Date(),
    teamA: Joi.string().min(0).required(),
    teamB: Joi.string().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Match = Match;
module.exports.validate = validateMatch;
