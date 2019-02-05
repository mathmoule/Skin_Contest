import React, { Component } from 'react';
import './App.css';
import SkinDisplayerLibrary from './skinDisplayerLibrary';
import Fond from './fond.svg';

const ContentStyle = {
    width: '100%',
    height: 'calc(100% - 10vh)',
    "min-height": "90vh",
    backgroundImage: "url('"+Fond+"')",
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    paddingTop: "10vh",
    display: "flex",
}

const row = {
  marginTop: '20vh',
  width: "calc(150vh + 1%)",
  //border: "2px solid white",
  marginLeft: 'auto',
  marginRight: 'auto',
};
class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      rendered: false
    };
    
  }
  

  componentDidMount(){
    //this.setState({rendered: true});

   
  }
  render() {
    var skins = this.props.skins;
    var self=this;
    var vote = this.props.vote;
    return (
      <div style={ContentStyle}>
        
          <div style={row}>

        
          {
           skins.map(function(res, i){
              if(i%2 !== 0){
                return(
                  <SkinDisplayerLibrary gun={res.gun} name={res.nom} imageUrl={res.imageUrl} nbVote={res.vote} id={res.id} voteSkin={vote}/>
                 
                  
                );
              }else{
                return (
                  <SkinDisplayerLibrary gun={res.gun} name={res.nom} imageUrl={res.imageUrl} nbVote={res.vote} id={res.id} voteSkin={vote}/>
                )
              }
             
            }

            )
          }
          </div>
        
      </div>
    );
  }
}

export default Library;
