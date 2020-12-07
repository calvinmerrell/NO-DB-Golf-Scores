import React, { Component } from 'react'


class ScoreHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '', 
            inputText: '', 
            mode: 'view' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    handleSave() {
        this.props.changeScore(this.props.courses.history_id,this.state.inputText)
        this.setState({ text: this.state.inputText, mode: 'view' });
    }

    handleEdit() {
        this.setState({ mode: 'edit' });
    }

    render() {
        const view = this.state.mode === 'view';

        return (
            <div className="submittedscore">
                <p>Course: {this.props.courses.name} </p>
                <p>Score: {this.props.courses.score} </p>
                <p>Date: {this.props.courses.date}</p>
                <p>Teebox: {this.props.courses.teebox}</p>
            <div>
                <p > {this.state.score}</p>
                { view ? null : ( <p> 
                    <input onChange={this.handleChange} value={this.state.inputText} />
                    <button onClick={this.handleSave}>Save</button></p>)
                }
            </div>

            {this.props.showButtons ? <><button className="ctrlbuttons" onClick={() => this.handleEdit()}> Edit </button>

            <button className="ctrlbuttons"
                    onClick={() => this.props.removeScore(this.props.courses.history_id)}>Remove </button></>: null}
            </div>
        )
    }
}
    export default ScoreHistory