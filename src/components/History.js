import React from "react"
import ScoreHistory from './ScoreHistory'
// import ScoreHistory from "./ScoreHistory"

const History = (props) => {
    const historyMap = props.history.courses.map((element) => {
        return <ScoreHistory 
        key = {element.history_id} 
        courses = {element}
        changeScore = {props.changeScore}
        removeScore = {props.removeScore}
        showButtons = {true}
        />
    }
    )
    console.log(props)
return (
  <div className="history-container">
    <div className="history">
      <h2 className="historyTitle"> Score History </h2>
      {historyMap}
    </div>
            
    <div className="bestScore"> 
      Best Score: 
      {props.history.bestScore && props.history.bestScore.name ? <ScoreHistory 
        courses = {props.history.bestScore}
        changeScore = {props.changeScore}
        removeScore = {props.removeScore}
        showButtons = {false} />: null 
        }
        
    </div>
            
    <div className="averageScore"> 
      Average Score: {props.history.aveScore}
    </div>
  </div>
    )
}

export default History