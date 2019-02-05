import React, { Component } from 'react';
import './App.css';
import Fond from './fond.svg';
import Logo from './logo-entier.svg';
import BlastTournament from './blastTournament.PNG';
const ContentStyle = {
    width: '100%',
    height: '90vh',
    backgroundImage: "url("+Fond+")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: "10vh",
}
const PrestextStyle = {
  paddingTop: "5vh",
  width: "100%",
  color: "white",
  fontSize: "1.5em",
  textAlign: 'center',
  textShadow: "2px 2px rgba(0, 0, 0, 0.2)",
};
const logoStyle = {
  width: '30vh',
  margin: 'auto',
 
};
const MidStyle = {
  display: 'flex',
  paddingTop: "5vh",
};
const ActionCallStyle = {
  backgroundColor: 'white',
  color: '#be2d7d',
  padding: '10px',
  borderRadius: "0.5em",
  width: 'fit-content',
  fontWeight: 'bold',
  margin: 'auto',
  cursor: 'pointer',
  boxShadow: "2px 2px 2px 3px rgba(0, 0, 0, 0.2)",
};
const TournamentStyle = {
  width: '60vh',
  margin: 'auto',
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
};
class MenuBar extends Component {


  renderButton(){
    var isConnected = this.props.isConnected;
    var setPage = this.props.setPage;
    if(isConnected === true){
      return(
        <div style={ActionCallStyle} onClick={function(){ setPage(2);}}>
          CREATE YOUR SKIN !
        </div>
      );
    }else{
      return(
        <div style={ActionCallStyle} onClick={function(){ setPage(6);}}>
          SIGNUP !
        </div>
      );
    }
  }
  render() {
    
    
    return (
      <div style={ContentStyle}>
        <div style={PrestextStyle}>
          PARTICIPE IN OUR <strong>SKIN CONTEST</strong> <br/> 
          AND WIN <strong>2 TICKETS</strong> FOR <br/>
          <strong>THE MADRID TOURNAMENT</strong>
        </div>
        <div style={MidStyle}>
        <img style={TournamentStyle} src={BlastTournament} alt={'Blast Tournament'} />
        </div>
        <div style={MidStyle}>
        {
          this.renderButton()
        }
         
        </div>
        <div style={MidStyle}>
          <img style={logoStyle} src={Logo} alt={"Blast Pro Series Logo"} />
        </div>
        
      </div>
    );
  }
}

export default MenuBar;
