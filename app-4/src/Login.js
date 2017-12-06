import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }
  userInputUserName(val){
    this.setState({userName: val})
  }
  userPassword(val){
    this.setState({password: val})
  }
  loginAlert(){
   alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
  }


  render() {

    return (
      <div className="App">
        <input onChange={(e) => this.userInputUserName(e.target.value)}/>
        <input onChange={(e) => this.userPassword(e.target.value)}/>
        <button onClick={(e) => this.loginAlert(e.target.value)}>Login</button>
      </div>
    );
  }
}

export default Login;
