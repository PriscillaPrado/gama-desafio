const mongoose = require('mongoose');
const Candidate = require('../models/Categoria');


module.exports = {
    async register(req, res) {

        const {
            inputname, inputposition, selectsexo, inputborn, selectestadocivil, inputphone, inputphone2, inputphone3, inputemail, cep, rua, numero, complemento, bairro, cidade, uf, inputrg, inputcpf, selecthab, selectveic} = req.body; 

        const novoCadastro = new Candidate (); 

            novoCadastro.inputname = inputname;
            novoCadastro.inputposition = inputposition;
            novoCadastro.selectsexo = selectsexo;
            novoCadastro.inputborn = inputborn;
            novoCadastro.selectestadocivil = selectestadocivil;
            novoCadastro.inputphone = inputphone;
            novoCadastro.inputphone2 = inputphone2;
            novoCadastro.inputphone3 = inputphone3;
            novoCadastro.inputemail = inputemail;
            novoCadastro.cep = cep;
            novoCadastro.rua = rua;
            novoCadastro.numero = numero;
            novoCadastro.complemento = complemento;
            novoCadastro.bairro = bairro;
            novoCadastro.cidade = cidade;
            novoCadastro.uf = uf;
            novoCadastro.inputrg = inputrg;
            novoCadastro.inputcpf = inputcpf;
            novoCadastro.selecthab = selecthab;
            novoCadastro.selectveic = selectveic;
        
       
        novoCadastro.save((err,savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Usuário já Cadastrado');
            };
            return res.status(200).redirect('./final')
        });
    }
};
