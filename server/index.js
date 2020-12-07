const express = require('express')
const coursesCtrl = require('./controllers/coursesController')
const historyCtrl = require('./controllers/historyController')

const app = express()
const SERVER_PORT = 5000

app.use(express.json())

//Courses endpoints
app.get('/api/courses',coursesCtrl.getAllCourses)

//History endpoints
app.get('/api/history',historyCtrl.getHistory)
app.post('/api/history',historyCtrl.addToHistory)
app.put('/api/history/:history_id',historyCtrl.changeScore)
app.delete('/api/history/:history_id',historyCtrl.removeFromHistory)

app.listen(SERVER_PORT, ()=> console.log(`Listening on port ${SERVER_PORT}`))