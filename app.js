//Carregamento Modulos
const express = require("express")
const handlebars = require("express-handlebars")
const app = express()
const routes = require("./routes/admin")
const mongoose = require("mongoose")
const cors = require('cors');
const swaggerUI = require("swagger-ui-express")
const swaggerDocs = require('./swagger.json');
const path = require ("path")

//Configs
    
    app.use('/docs-api', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    //Express
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    //Handlebars
    
    app.engine("handlebars", handlebars({defaultLayout:"main"}))
    app.set("view engine", "handlebars");
    app.set('views', path.join(__dirname, 'views'));
    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://PriscillaPrado:RVhopaz9hBZZbF7M@cluster0.rjljt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,}).then(() => {
        console.log("Conectado ao Mongo")
    }).catch((err) => {
        console.log("Erro ao se conectar" + err)
    })
    //Public
    app.use(express.static(path.join(__dirname + "/public")))

//Rotas 
    app.use(cors());
    app.use(routes)

//Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log("servidor rodando na porta http://localhost:8081")
})