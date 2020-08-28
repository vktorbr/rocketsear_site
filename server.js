const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

//pega arquivos statics(como css) da pasta public 
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server
})

//rotas
server.get('/', function(req, res){
    return res.render('about');
})

server.get('/contents', function(req, res){
    return res.render('contents');
})

//error 404, vai após todas as rotas
server.use(function(req, res){
    res.status(404).render('not-found');
})

server.listen(5001, function(){
    console.log('server is running');
})