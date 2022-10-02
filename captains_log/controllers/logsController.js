const Log = require('../models/logs')

const seed = require('../models/seed')

//index route GET/logs
// Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)

const findAllLogs = (req,res) => {
    Log.find({}, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Index', { logs: foundLog })
        }
    })
}

//new route
const showNewView = (req,res) => {
    res.render('new')
}

// route - delete
const deleteALog = (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deleteLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// route - update
const updateOneLog = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    
    Log.findByIdAndUpdate(req.params.id, req.body, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/logs/${req.params.id}`);
        }
    })
}

// ROUTE     POST /fruits     (create)
const createNewLog = (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Log.create(req.body, (err, createdLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/logs')
        }
    })
}

// route - edit
const showEditView = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Edit', { log: foundLog });
        }
    })
}


// route - show
const showOneLog = (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Show', { log: foundLog })
        }
    })
}


// route - seed
const seedStarterData = (req, res) => {
    
    Log.deleteMany({}, (err, deleteLogs) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data')
            console.log(seed)
            
            Log.create(seed, (err, createdlogs) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/logs')
                }
            })
        }
    })
}

//route clear
const clearData = (req, res) => {
    Log.deleteMany({}, (err, deletedLogs) => {
        if (err) {
            res.status(400).json(err)
        } else { 
            res.status(200).redirect('/logs')
        }
    })
}



module.exports = {
    findAllLogs,
    showNewView,
    deleteALog,
    updateOneLog,
    createNewLog,
    showEditView,
    seedStarterData,
    showOneLog,
    clearData
}