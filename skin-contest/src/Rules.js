import React, { Component } from 'react';
import './App.css';
import Fond from './fond.svg';
import Logo from './logo-entier.svg';

const ContentStyle = {
    width: '100%',
    height: '90vh',
    backgroundImage: "url("+Fond+")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: "10vh",
}
const rulesStyle = {
  padding: '30px',
  backgroundColor: 'white',
  margin: 'auto',
  color: "#2d2d2d",
  borderRadius: "1em",
  width: "50vh",
  boxShadow: "2px 2px 2px 3px rgba(0, 0, 0, 0.2)",
  marginTop: "10vh",
};
const logoStyle = {
  width: '30vh',
  margin: 'auto',
 
};
const MidStyle = {
  display: 'flex',
  paddingTop: "5vh",
};
class Rules extends Component {

  render() {

    return (
      <div style={ContentStyle}>
        <div className={"flex2"} style={rulesStyle}>
          <div >
            IF YOU WANT TO TRY YOUR LUCK, YOU HAVE TO RESPECT THE FOLLOWING RULES:
            <br/>
            <br/>
            - DONT USE INAPPROPRIATE IMAGES (No pornographic or racist content).<br/>
            - DONT GIVE INAPPROPRIATE NAME TO YOUR SKIN.<br/>
            - DONT CREATE MORE THAT 5 SKINS.<br/>
            <br/>
            <br/>
            IF YOUR WIN PASSES YOU WILL RECEIVE AN EMAIL AT THE ADRESS YOU SPECIFIED. I YOU DO NOT ANSWER UNTIL 24H ANOTHER PARTICIPANT WILL WIN YOUR PASSES. SO STAY CONNECTED !
          </div>
        </div>
        <div className={"flex2"} style={MidStyle}>
        <img style={logoStyle} src={Logo} alt={"Blast Pro Series Logo"} />
        </div>
      </div>
    );
  }
}

export default Rules;
