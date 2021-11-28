const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    pw: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);
