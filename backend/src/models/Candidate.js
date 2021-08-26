const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true},
    datanascimento: { type: String, unique: false, required: true},
    cargo: { type: String, unique: false, required: true},
    estadocivil: { type: String, unique: false, required: false},
    genero: { type: String, unique: false, required: false},
    cep: { type: String, unique: false, required: true},
    endereco: { type: String, unique: false, required: true},
    numero: { type: String, unique: false, required: true},
    complemento: { type: String, unique: false, required: false},
    bairro: { type: String, unique: false, required: true},
    cidade: { type: String, unique: false, required: true},
    uf: { type: String, unique: false, required: true},
    celular: { type: String, unique: false, required: true},
    alternativo: { type: String, unique: false, required: false},
    email: { type: String, unique: true, required: true},
    id: { type: String, unique: false, required: false},
    cpf: { type: String, unique: false, required: true},
    veiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false},
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);