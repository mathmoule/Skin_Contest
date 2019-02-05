import React, { Component } from 'react';
import './App.css';

const connexionStyle = {
 //border: '2px solid red',
 display: 'inline-block',
 float: "right",
 marginTop: "2vh",
 marginRight: "2vh",
};

const connexionDivStyle = {
  borderRadius: '0.8em',
  padding: '6px',
  fontSize: '0.8em',
  cursor: 'pointer',
};
class UserManager extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.setTheInscriptionPage = this.setTheInscriptionPage.bind(this);
  }
  setTheInscriptionPage(){
    var setPage = this.props.setPage;
    setPage(6);
  }
  render() {
    var isConnected = this.props.isConnected;
    var userId = this.props.userId;

    if(isConnected){
      return (
        <div style={connexionStyle}>
          You are connected
        </div>
      );
    }else{
      return (
        <div style={connexionStyle}>
         <div style={connexionDivStyle} className={"ConnexionButton"} onClick={this.setTheInscriptionPage}>SIGNUP</div>
        </div>
      );
    }

  }
}

export default UserManager;
