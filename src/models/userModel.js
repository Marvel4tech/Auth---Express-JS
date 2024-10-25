const mongoose = require("mongoose")

const userShema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "manager", "user"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userShema);