// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// // Loading our Model of log
// const Log = require('../models/logs')

// // Bring in seed data
// const seed = require('../models/seed')

//// Bring in controller functions
const {findAllLogs, showNewView, deleteALog, updateOneLog, createNewLog, showEditView, seedStarterData, showOneLog, clearData} = require('../controllers/logsController')

//set up index route
router.get('/', findAllLogs)

//setup new route
router.get('/new', showNewView)

//setup delete route
router.delete('/:id', deleteALog)

//setup update route
router.put('/:id', updateOneLog)

// Setup "create" route
router.post('/', createNewLog)

//setup edit route
router.get('/:id/edit', showEditView)

//setup seed route
router.get('/seed', seedStarterData)

//clear route
router.get('/clear', clearData)

//setup show route
router.get('/:id', showOneLog)

module.exports = router

// #	Action	URL	HTTP Verb	jsx view filename	mongoose method
// 1	Index	/logs/	GET	Index.jsx	Log.find()
// 2	Show				
// 3	New	/logs/new	GET	New.jsx	none
// 4	Create	/logs/	POST	none	Log.create(req.body)
// 5	Edit				
// 6	Update				
// 7	Destroy	