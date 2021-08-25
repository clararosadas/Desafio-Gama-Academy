const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        
        const { nome, email } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.email = email;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);
        });
    },
}