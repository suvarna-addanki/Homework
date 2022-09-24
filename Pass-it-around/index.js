const express = require('express')
const app = express()

app.get('/', (req, res) => {
    
    res.send(`<h1 style ="color:red;backgroundcolor:geen;text-align:center;padding:100px">99 Bottles of beer on the wall</h1> \n <a style="color:brown;font-size:20px;padding: 200px 0px 0px 600px;" href ="/98">take one down&pass it around</a>` )
})

app.get('/:number_of_bottles', (req, res) => {
    let newNumber = req.params.number_of_bottles;
    if(newNumber > 0) {
        res.send(`<h1 style ="color:red;text-align:center;padding:100px">${newNumber} Bottles of beer on the wall</h1> \n <a style="color:brown;font-size:20px;padding: 100px 0px 0px 600px;" href="/${newNumber-1}">take one down&pass it around</a>`)
    }
    else {
        res.send(`<h1 style ="color:red;text-align:center;padding:40px">0 Bottles left</h1> \n <h2 style ="color:blue;text-align:center;">Click the link below to start over again</h2> \n <a style="color:brown;font-size:20px;padding: 650px;" href ="/">Back to start</a>`)
    }
})



 app.listen(3000)

