import React, { Component } from 'react';
import './App.css';
import AKK7 from './AK-K7-transparent.png';
import axios from 'axios';

const BlockStyle = {
  border: "2px solid white",
  width: "50vh",
  height: "30vh",
  display: 'inline-block',
  margin: 'auto',
  borderRadius: "1em",
  backgroundColor: "#2d2d2d",
  boxShadow: "2px 2px 5px 5px rgba(0, 0, 0, 0.2)",

};
const CreatorBox = {

    height: 'fit-content',
    width: "50vh",
    margin: 'auto',

};



const canvasForm = {

   width: '100%',
   height: '7vh',
   display: 'flex',

};

const GunPatchworkStyle = {
    height: '100%',
    width: '100%',
};

const buttonBox = {
   width: '100%',
   height: "5vh",
   display: "flex",


};

const nbVoteStyle ={
  paddingTop: "10px",
  paddingLeft: "10px",
  paddingRight: "10px",
  textAlign: "center",
};
const formBox = {
    margin: 'auto',
    color: '#101a4c',
};
const titleName = {
  color: "white",
  fontSize: "1.2em",
  letterSpacing: "1px",
};
const deleteStyle = {
  cursor: "pointer",
};
class SkinDisplayerLibrary extends Component {



  render() {
    var canvasImage = {

        //borderRadius: "0.5em",
        overflow: 'hidden',
        backgroundColor: 'black',

        width: '50vh',
        height: '18vh',

        //backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",


    };

    var gun = this.props.gun;
    var name = this.props.name;
    var imageUrl = this.props.imageUrl;
    canvasImage.backgroundImage = "url('http://localhost:3002/static/i"+imageUrl.toString()+".png')";
    var nbVote = this.props.nbVote;
    var voteSkin = this.props.voteSkin;
    var idSkin = this.props.id;
    return (
      <div style={BlockStyle}>
        <div className={"Input"} style={titleName}>{name}</div>

        <div id={'gunBox'} style={canvasImage}> {/* Skin Visualisation Box*/}




            <img id={'gun'} alt={'gun'} src={AKK7} style={GunPatchworkStyle} />




        </div>
        <div style={nbVoteStyle}>
          <span className={"Rose"}>{nbVote}</span> vote for this skin.
        </div>
        <div style={nbVoteStyle} id={'c'+idSkin}>
          <div style={deleteStyle} id={'b'+idSkin} onClick={voteSkin.bind(this, this.props.id)}>VOTE</div>
        </div>

      </div>
    );
  }
}

export default SkinDisplayerLibrary;
