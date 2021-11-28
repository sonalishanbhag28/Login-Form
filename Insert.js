const mongoose = require("mongoose");
const User = require("./models/User");
const insert = () => {
    const user1 = new User({
        user: "sonali",
        pw: "19bds0114"
    });
    user1.save();
}
module.exports = insert;
