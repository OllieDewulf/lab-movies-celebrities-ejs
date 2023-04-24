const { Schema, model } = require("mongoose");

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        default: String
    },
    catchPhrase: {
        type: String,
        required: true
    }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;