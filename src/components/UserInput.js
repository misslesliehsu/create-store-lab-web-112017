import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChangeUN = (e) => {
    this.setState( {username: e.target.value})
  }


  handleChangeHT = (e) => {
    this.setState( {hometown: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown}})
    this.setState({username: '', hometown: ''})
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Username' value={this.state.username} onChange={this.handleChangeUN}></input>
          <input type='text' placeholder='Hometown' value={this.state.hometown} onChange={this.handleChangeHT}></input>
          <input type='submit'></input>
      </form>
      </div>
    );
  }
};

export default UserInput;
