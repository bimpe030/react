import React, { Component } from 'react'
import './users.css'
import axios from 'axios'

export class Users extends Component {

  constructor() {
        super()

        this.state = {
            users: [],
            loading: true
        }
  }

  toogleModal = () => {
    if(this.state.isOpen){
      this.setState({
        isOpen: false
      })
    } else {
      this.setState({
        isOpen: true
      })
    }
  }
  
  componentDidMount() {
    axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
    // .this(res => console.log(res))
    .then(res => {
      console.log(res)
      this.setState({
      users: res.data.slice(0,20)
     })
    })
    
  }
  
  
  render() {
    return (
      <div className="main">
        <h4 onClick={() => this.toogleModal()}>connected users</h4>
        <div id="user-list" className={this.state.isOpen ? 'show' : 'hidden'}>
          {this.state.users.map(({nickname, id}) =>{
            return (
              <div className="user" key={id}>
                <span><i className="fas fa-user"></i></span>
                {nickname}
              </div>
            )
          })}
        </div>
        
      </div>
    )
  }
}

export default Users
