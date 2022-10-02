const express = require('express')

const methodOverride = require('method-override')

const app = express()

// Bring in mongoConfig function
const mongoConfig = require('./config')

const logRoutes = require('./routes/logRoutes')

require('dotenv').config()

//port
const port = process.env.PORT

//setup our view engine
app.set('view engine', 'jsx')  //loading express-react-views engine that we already intalled thru the command npm i express-react-views

app.engine('jsx', require('express-react-views').createEngine())   //it renders the view on the browser

//middleware
app.use(express.urlencoded({extended:false}))   //use and configure body-parserin your server.js(note, this package was once separate, but has been added back in to express in other words browser has to show us  in the next page whatever we inputted on the form (title,entry,checkbox)

app.use(methodOverride("_method"))

app.use(express.static("public"))
app.use(express.json())

app.use('/logs', logRoutes)

// app.get('/index', (req, res) => {
//     res.send('index')
// })
// app.get('/new', (req, res) => {
//     res.render('new')
// })

// app.post('/logs', (req,res) =>{   //if else statement is to show us whether checkbox is checked or unchecked in the next page(/logs)
//     if(req.body.shipIsBroken === "on") {
//         req.body.shipIsBroken = true
//     }else {
//         req.body.shipIsBroken = false
//     }
//     res.send(req.body)
// })




app.listen(port, () => {
    console.log("listening on port: ", port)
})

// Connect to DB
mongoConfig()