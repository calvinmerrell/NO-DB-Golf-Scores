import React from "react"
import Course from './Course'

const Courses = (props) => {
    const courseMap = props.courses.map((element) => {
        return <Course addToHistory={props.addToHistory} 
        key={element.id} course={element} />
    })


    return (
        <div className="courses-container">
        {courseMap}</div>
       
    )
}

export default Courses