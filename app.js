const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('mi ultra secreto'))

app.use(session({
    secret: 'mi ultra secreto',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())


 app.set('view engine', 'ejs')

app.get('/',(req, res)=>{
    // Si ya iniciamos mostrar bienvenida


    // Si no hemos iniciado sesion redireccionar a /login

})

app.get('/login',(req,res)=>{
    // Mostrar el formulario de login
    res.render('login')
})


app.post('/login',(req, res)=>{
    // Recibir credenciales e iniciar sesion
    
})

app.listen(8080,()=> console.log("Server started"))