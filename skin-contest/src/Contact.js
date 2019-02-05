import React, { Component } from 'react';
import './App.css';
import Fond from './fond.svg';
import Logo from './logo-entier.svg';

const ContentStyle = {
    width: '100%',
    height: '90vh',
    backgroundImage: "url('"+Fond+"')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: "10vh",
    
}
const logoStyle = {
  width: '30vh',
  margin: 'auto',
 
};
const textStyle = {
  textDecoration: "none",
  color: "#be2d7d",
  backgroundColor: "white",

  
  padding: '10px',
  borderRadius: "0.5em",
  width: 'fit-content',
  fontWeight: 'bold',
 
  cursor: 'pointer',
  boxShadow: "2px 2px 2px 3px rgba(0, 0, 0, 0.2)",

};
const lienStyle = {
  textDecoration: "none",
  color: 'white',
  margin: 'auto',
};
const bloc = {
  marginTop: "10vh",
  textAlign: "center",
  width: "100%",
  fontWeight : "bold",
};
class Contact extends Component {
 
  render() {
    
    return (
      <div style={ContentStyle}>
      <div  style={bloc}>
        <div>IF YOU HAVE ANY QUESTION, OR WANT TO REPORT A PROBLEM ABOUT THIS WEBAPP<br/> PLEASE CONTACT US AT blastContest@blast.com</div>
      </div>
      <div style={bloc} className={'flex2'}>
        <a style={lienStyle} href={"mailto:blastContest@blast.com"}><div style={textStyle}>CONTACT US </div></a>
      </div>
      <div  style={bloc}>
        <img  style={logoStyle} src={Logo} alt={'Blast Pro Series Logo'} />
      </div>
        
      </div>
    );
  }
}

export default Contact;
