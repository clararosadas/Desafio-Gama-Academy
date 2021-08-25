const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true},
    email: { type: String, unique: true, required: true},
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);