import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Fond from './fond.svg';

const ContentStyle = {
    width: '100%',
    height: '90vh',
    backgroundImage: "url("+Fond+")",
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    paddingTop: "10vh",
    display: 'flex',
}

const inscriptionStyle={
  border: "2px solid white",
  backgroundColor: "white",
  padding: "4px",
  borderRadius: "1em",
  width: "50vh",
  //height: "60vh",
  display: "inline-block",
  margin: 'auto',
  color: '#000000',
  boxShadow: "2px 2px 5px 5px rgba(0, 0, 0, 0.2)",
};

const TitleStyle = {
  margin: "auto",
  paddingTop: "3px",
  paddingBottom: "3px",
};
const connectionStyle = {
  border: "2px solid white",
  backgroundColor: "white",
  padding: "4px",
  borderRadius: "1em",
  width: "40vh",
//  height: "60vh",
  display: "inline-block",
  margin: 'auto',
  color: '#000000',
  boxShadow: "2px 2px 5px 5px rgba(0, 0, 0, 0.2)",
};

const actionButtonStyle = {
  width: "20%",
  margin: "auto",
};
class SignupSignin extends Component {
  constructor(props){
    super(props);
    this.state={
      error: ""
    };

    this.connectUser = this.connectUser.bind(this);
    this.inscriptUser = this.inscriptUser.bind(this);
  }

  inscriptUser(){
    var setConnexion = this.props.setConnexion;
    var pseudo = document.getElementById("pseudoInscript").value;
    var password = document.getElementById("passwordInscript").value;
    var mail = document.getElementById("mailInscript").value;

    var check1 =  document.getElementById("checkBoxNewsLetter").checked;
    var check2 =  document.getElementById("checkBoxCGU").checked;


    if(check1 && check2){


        axios({
          method: 'post',
          url: 'http://localhost:3002/userInscript/'+pseudo.toString()+'/'+password.toString()+'/'+mail.toString()
        }).then(function(res){
          var id = res.data;
          setConnexion(id);
        })

    }else{

    }


  }

  connectUser(){
    var setConnexion = this.props.setConnexion;
    var pseudo = document.getElementById("pseudoConnect").value;
    var password = document.getElementById("passwordConnect").value;
    
    axios({
        method: 'post',
        url: 'http://localhost:3002/user/'+pseudo.toString(),
      }).then(function(res){
        
          var id = res.data;
          axios({
            method: 'post',
            url: 'http://localhost:3002/userPass/'+id.toString()+"/"+password.toString(),
          }).then(function(res){
            
            if(res.data === 0){
              setConnexion(id);
            }else{
              document.getElementById("errorDisplayer").innerHTML = "Your Nickname or Password is incorrect";
            }

          })
      })

  }
  render() {

    return (
      <div style={ContentStyle}>
        <div style={inscriptionStyle}>
          <div className={"flex2"}>
            <div style={TitleStyle}>INSCRIPTION</div>
          </div>
          <div>
            <input id={"mailInscript"} className={"Input"} type={"text"} placeholder={"Mail"} />
            <input id={"pseudoInscript"} className={"Input"} type={"text"} placeholder={"Pseudo"} />
            <input id={"passwordInscript"} className={"Input"} type={"password"} placeholder={"Password"} />

            <input id={"checkBoxNewsLetter"} type={"checkbox"} value={"true"}/>
            <label for={"checkBoxNewsLetter"} >I allow Blast Pro Series to mail about the skin-contest competition</label><br/>
            <input id={"checkBoxCGU"} type={"checkbox"} value={"true"} />
            <label for={"checkBoxCGU"} >I red the rules of the contest and agree with them</label>
            <div className={"flex2"}>
              <button style={actionButtonStyle} onClick={this.inscriptUser}>Signup</button>
            </div>
          </div>
        </div>
        <div style={connectionStyle}>
        <div className={"flex2"}>
          <div style={TitleStyle}>CONNEXION</div>
        </div>

          <div id={'errorDisplayer'}></div>
          <div>
            <input id={"pseudoConnect"} className={"Input"} type={"text"} placeholder={"Pseudo"} />
            <input id={"passwordConnect"} className={"Input"} type={"password"} placeholder={"Password"} />
              <div className={"flex2"}>
            <button style={actionButtonStyle} onClick={this.connectUser}>Signin</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupSignin;
