const mongoose = require('mongoose');
const URL = 'mongodb://localhost/crud';

mongoose.connect(URL)
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.err(err));

module.exports = mongoose;