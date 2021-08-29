
const express = require ("express")
const routes = new express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const cadastroController = require('../controller/cadastroController')


routes.get('/formulario', (req, res) => {
    res.render('rotas/formulario')
});
routes.get('/', (req, res) => {
    res.render('rotas/index')
});
routes.get('/final', (req, res) => {
    res.render('rotas/final')
})

routes.post('/register', cadastroController.register)



module.exports = routes;