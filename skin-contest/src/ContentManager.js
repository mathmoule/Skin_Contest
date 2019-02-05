import React, { Component } from 'react';
import './App.css';
import Lobby from './Lobby';
import MySkins from './MySkins';
import SkinCreator from './SkinCreator';
import Library from './Library';
import Rules from './Rules';
import Contact from './Contact';
import SignupSignin from './SignupSignin';
import ConnectedUser from './connectedUser';
import axios from 'axios';

class ContentManager extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.getContent = this.getContent.bind(this);
        this.vote = this.vote.bind(this);
        this.deleteSkin = this.deleteSkin.bind(this);
      }

    vote(idSkin){
        
        axios.post("http://localhost:3002/skinVote/"+idSkin).then(function(res){
            document.getElementById('c'+idSkin).innerHTML = "+1";
            //document.getElementById('b'+idSkin).removeAttribute('onclick');
        })
    }
    deleteSkin(idSkin){
      //var userId = this.props.userId;
      var self = this;
      if(window.confirm("Are you sure you want to delete this skin ?") === true){
        axios.post("http://localhost:3002/skinDelete/"+idSkin).then(function(){

        });
        
        self.props.reloadSkins(idSkin);


      }

    }
    getContent(numPage){

      var setConnexion = this.props.setConnexion;
      var isConnected = this.props.isConnected;
      var userId = this.props.userId;
      var setPage = this.props.setPage;
        switch(numPage){

            case 0:
            return(
                <Lobby setPage={setPage} isConnected={isConnected}/>
            );
            break;

            case 1:

            return(
                <MySkins  userId={userId} mySkins={this.props.mySkins} deleteSkin={this.deleteSkin}/>
            );

            break;

            case 2:

              return(
                  <SkinCreator  userId={userId}/>
              );

            break;

            case 3:
            return(
                <Library  skins={this.props.skins} isConnected={isConnected} vote={this.vote}/>
            );
            break;

            case 4:
            return(
                <Rules  />
            );
            break;

            case 5:
            return(
                <Contact  />
            );
            break;

            case 6:
            if(isConnected){
              return(
                <Lobby setPage={setPage} isConnected={isConnected}/>
              )

            }else{
              return(
                  <SignupSignin setConnexion={setConnexion} />
              );
            }

            break;

            default:
        }
    }
  render() {
   var pageToRender = this.props.pageToRender;

    return (
      <div>
        {
            this.getContent(pageToRender)
        }
      </div>
    );
  }
}

export default ContentManager;
