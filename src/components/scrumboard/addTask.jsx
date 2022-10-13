import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
        content: ""
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () =>{
        this.setState({
            isOpen: false
        })
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        })
        this.props.addTask(this.state)

        this.setState({
            content: ""
        })
    }
    
  render() {
    return (
      <div className="add-task">
        <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
            <div className="header">
                <h4 >Add a new task</h4>
                <h4 id="close" onClick={() => this.closeModal()}>X</h4>
            </div>

            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
                <button>CONFIRM</button>
            </form>
        </div>

        <button className="add" onClick={() => this.openModal()}>ADD TASK</button>
      </div>
    )
  }
}

export default AddTask
