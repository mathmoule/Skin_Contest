import React, { Component } from 'react';
import './App.css';
import SkinDisplayer from "./skinDisplayer";
import Fond from './fond.svg';

const ContentStyle = {
    width: '100%',
    height: 'calc(100% - 10vh)',
    "min-height": "90vh",
  //  backgroundColor: '#285aa5',
    backgroundImage: "url('"+Fond+"')",
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    paddingTop: "10vh",
    display: "flex",
}
const row = {
  width: "calc(150vh + 1%)",
  paddingTop: "20vh",
 // border: "2px solid white",
  marginLeft: 'auto',
  marginRight: 'auto',
};

class MySkins extends Component {


  render() {
    var mySkins = this.props.mySkins;
    var deleteSkin = this.props.deleteSkin;
    
    if(mySkins.length == 0){

      return (
        <div style={ContentStyle}>
          You dont have any skin yet, create one
        </div>
      );

    }else{
      return (
        <div style={ContentStyle}>
          <div style={row}>
            {
            mySkins.map(function(res){

                return (
                  <SkinDisplayer gun={res.gun} name={res.nom} imageUrl={res.imageUrl} nbVote={res.vote} id={res.id} deleteSkin={deleteSkin}>
                  </SkinDisplayer>

                );
              }

              )
            }
          </div>
        
        </div>
      );
    }
    }

}

export default MySkins;
