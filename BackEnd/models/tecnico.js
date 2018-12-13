const mongoose = require('mongoose'),
    {
        Schema
    } = mongoose;

const tecnicoSchema = new Schema({
    fullnameTec: String,
    emailTec: {type: String, required: true},
    passwordTec: {type: String, required: true},
    photoTec: String,
    phoneTec: {
        type: Number,
        required: true
        // ,
        // max: 9
    },
    dniTec: {
        type: Number,
        required: true
        // ,
        // max: 8
    }
});

module.exports = mongoose.model('tecnico', tecnicoSchema);