const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        
        const { nome, datanascimento, cargo, estadocivil, genero, cep, endereco, numero, 
            complemento, bairro, cidade, uf, celular, alternativo, email, id, 
            cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.datanascimento = datanascimento;
        newCandidate.cargo = cargo;
        newCandidate.estadocivil = estadocivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.alternativo = alternativo;
        newCandidate.email = email;
        newCandidate.id = id;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('ERRO');
            } else {
                return res.status(200).send(savedCandidate);
            }    
        });
    },
}