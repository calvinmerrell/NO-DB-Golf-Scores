import React, {Component} from 'react'


class Course extends Component {
    constructor(props) {
        super (props)
        this.state = {
            score: '',
            date: "",
            teebox: "",
        }
      this.handleChange = this.handleChange.bind(this)
      this.handleAddToHistory = this.handleAddToHistory.bind(this)
    }

    handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      },()=>{
          console.log(this.state);
      })
    }

    handleAddToHistory(e) {
      e.preventDefault()
        this.props.addToHistory(this.props.course.id,this.state.score,this.state.date,this.state.teebox)
        this.setState({
          score: '',
          date: "",
          teebox: "",
      })
    }

    render(){
      return(
        
        <div className="form-container">
          
          <img className="logo" src={this.props.course.image} alt='Logo'/>
          
          <p className="courseName" >{this.props.course.name}</p>
          
          <form onSubmit={this.handleAddToHistory}>

          <input 
          className="scoreInput" 
          type="text" 
          name="score" 
          placeholder="Enter Score"
          value={this.state.score} 
          onChange={this.handleChange}>
          </input>
          
          <input 
          className="dateInput" 
          type="date" 
          name="date"
          value={this.state.date} 
          onChange={this.handleChange}>
          </input>
          <input 
          className="teeboxInput" 
          type="text" 
          name="teebox" 
          placeholder="Enter Teebox"
          value={this.state.teebox} 
          onChange={this.handleChange}>
          </input>
          

          </form>
          
          {this.state.score ? <button className="post_score_button" 
          onClick={this.handleAddToHistory}>Post Score</button> : null}

        </div>
        )
    }
}
export default Course