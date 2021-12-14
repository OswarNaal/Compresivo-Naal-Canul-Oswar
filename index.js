const express = require ('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.set('views',__dirname + '/views')

app.use(express.static(__dirname + "/public" ))

app.get('/',(req,res)=>{
    res.render("index",{
        tituloP:"Home",
        titulo : "Curriculum Vitae"
    })
})
app.get('/404',(req,res)=>{
    res.render("404",{
        tituloP : "Error",
        titulo : "Página no encontrada, favor de revisar tu URL"
    })
})
app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
        tituloP : "Contact",
        titulo : "Contáctanos"
    })
})
app.get('/datos',(req,res)=>{
    res.render("datos",{
        tituloP: "Data",
        titulo: "Datos Personales"
    })
})
app.get('/estudios',(req,res)=>{
    res.render('estudios',{
        tituloP: 'studies',
        titulo:'Niveles de Estudio'
    })
})
app.get('/laboral',(req,res)=>{
    res.render('laboral',{
        tituloP: 'Labor',
        titulo:'Experiencia Laboral'
    })
})
app.get('/idiomas',(req,res)=>{
    res.render('idiomas',{
        tituloP: 'Lenguage',
        titulo:'Dominio de Idiomas'
    })
})
app.get('/equipos',(req,res)=>{
    res.render('equipos',{
        tituloP: 'Equipment',
        titulo:'Dominio de Equipos'
    })
})
app.listen(port,()=>{
    console.log('Servidor OK, en el puerto',port)
})

