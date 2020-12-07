const courses = require('../data')

const history = {
    courses: [],
    aveScore: 0,
    bestScore: {score: 200}
}

let historyId = 0

const updateAveScore = () => {
    console.log(history.courses)
    const totalScore = history.courses.reduce((acc, element) => { 
        return acc + +element.score
    }, 0)
    const aveScore = totalScore / history.courses.length

    history.aveScore = aveScore
}

const updateBestScore = () => {

    let min = courses[0]
    let bestScore = { score: 200 }
    for (let i = 0; i < history.courses.length; i++) {
        if (bestScore.score > history.courses[i].score) {
            bestScore = history.courses[i]
        }
    }
    history.bestScore = bestScore
}

module.exports = {

    getCourses: (req, res) => {
        res.status(200).send(history)
    },
    addToHistory: (req, res) => {
        const { courses_id, score, date, teebox } = req.body
        console.log(req.body)
        const course = courses.find(element => element.id === +courses_id)
        const userInput = {
            ...course,
            history_id: historyId,
            score,
            date,
            teebox,
        }

        history.courses.push(userInput)

        historyId++ 
        updateAveScore()
        updateBestScore()
        res.status(200).send(history)
    },
    changeScore: (req, res) => {
        console.log(history.courses)
        const { history_id } = req.params

        const { newScore } = req.body

        const index = history.courses.findIndex(element => element.history_id === +history_id)

        if (index === -1) {
            return res.status(404).send("Score not in history")
        }
        
        history.courses[index].score = newScore
        
        updateAveScore()
        updateBestScore()
        res.status(200).send(history)
    },
    removeFromHistory: (req, res) => {
        const { history_id } = req.params

        const index = history.courses.findIndex(element => element.history_id === +history_id)

        if (index === -1) {
            return res.status(404).send("Score not found")
        }
        history.courses.splice(index, 1)
        updateAveScore()
        updateBestScore()
        res.status(200).send(history)
    },
    getHistory: (req, res) => {
        res.status(200).send(history)
    }
}
