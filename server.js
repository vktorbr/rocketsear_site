const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

//pega arquivos statics(como css) da pasta public 
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

//rotas
server.get('/', function(req, res){
    return res.render('about');
})

server.get('/courses', function(req, res){
    return res.render('courses', {courses});
})

server.get('/courses/:id', function(req, res){
    const id = req.params.id;
    
    const course = courses.find(function(course){
        return course.id == id;
    })

    if(!course){
        return res.send("course not found")
    }
    res.render('course', {course});
})

//error 404, vai após todas as rotas
server.use(function(req, res){
    res.status(404).render('not-found');
})

server.listen(5001, function(){
    console.log('server is running');
})