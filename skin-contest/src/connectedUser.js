import React, { Component } from 'react';
import './App.css';
import Fond from './fond.svg';

const ContentStyle = {
    width: '100%',
    height: '70vh',
    backgroundImage: "url('"+Fond+"')",
    paddingTop: "30vh",
};


class ConnectedUser extends Component {

  render() {
    return (
      <div style={ContentStyle}>
        You are connected: Create Your own skin : BUTONNNNNNNN
      </div>
    );
  }
}

export default ConnectedUser;
