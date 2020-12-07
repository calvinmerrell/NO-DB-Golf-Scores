import React, { Component } from 'react'
import Courses from './Courses'
import History from './History'
import axios from 'axios'

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            history: { ave: 0, courses: [], bestScore: {} },
        }
    this.addToHistory = this.addToHistory.bind(this)
    this.changeScore = this.changeScore.bind(this)
    this.removeScore = this.removeScore.bind(this)
    }

componentDidMount() {
    axios.get('/api/courses').then((res) => {
        this.setState({
            courses: res.data,
            })
     })
}

addToHistory(id,score,date,teebox) { 
    const body = {courses_id:id, score, date, teebox}

    axios.post('/api/history',body).then((res) =>{
        this.setState({
            history: res.data,
        })
    })
}

changeScore(id, newScore) { 
    axios.put(`/api/history/${id}`,{newScore}).then(res => {
        this.setState({
            history: res.data,
        })
    })
}

removeScore(id) {
    axios.delete(`api/history/${id}`).then(res => {
        this.setState({
            history: res.data,
        })
    })
 }

render() {
    return (
        <div className="display">
            <Courses addToHistory={this.addToHistory} courses={this.state.courses} />
            <History history={this.state.history} changeScore={this.changeScore}
                     removeScore={this.removeScore} />
        </div>
    )
}

}
export default Display