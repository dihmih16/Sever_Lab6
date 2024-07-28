const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb://127.0.0.1:27017/MyDatabase";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
