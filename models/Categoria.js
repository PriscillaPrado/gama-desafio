const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CadastSchema = new Schema({
    inputname: {
        type: String,
        required: true
    },
    inputposition: {
        type: String,
        required: true
    },
    selectsexo: {
        type: String,
        required: true
    },
    inputborn: {
        type: Date,
        required: true
    },
    selectestadocivil: {
        type: String,
        required: true
    },
    inputphone: {
        type: Number,
        required: true
    },
    inputphone2: {
        type: Number,
        
    },
    inputphone3: {
        type: Number,
        
    },
    inputemail: {
        type: String,
        required: true,
        unique: true
    },
    cep: {
        type: Number,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    complemento: {
        type: String,
        
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    inputrg: {
        type: Number,
        required: true
    },
    inputcpf: {
        type: Number,
        required: true,
        unique: true
    },
    selecthab: {
        type: String,
        
    },
    selectveic: {
        type: String,
        
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CadastSchema);