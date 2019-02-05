import React, { Component } from 'react';
import MenuBar from './MenuBar';
import ContentManager from './ContentManager';
import axios from 'axios';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 0 ,
      skins: [],
      mySkins: [],
      connected: false,
      id: 0

    };
    this.setPageToRender = this.setPageToRender.bind(this);
    this.setConnexion = this.setConnexion.bind(this);
    this.reloadDeletedSkins = this.reloadDeletedSkins.bind(this);
    this.reloadAllSkins = this.reloadAllSkins.bind(this);
  }

  setConnexion(id){
    var self = this;
    axios.get('http://localhost:3002/mySkins/'+id.toString(),{
      'Content-Type': 'application/json'
    }).then(function(res){

     self.setState({mySkins: res.data} );

    })

      this.setState({ connected: true, id: id} );
  }


  reloadDeletedSkins(idSkin){
    var mySkins = this.state.mySkins;
    
    for(var i = 0; i < mySkins.length; i++){
      if(mySkins[i].id === idSkin){
        
        mySkins.splice(i, 1);

       this.setState({mySkins: mySkins});
      }
    }
  }

  reloadAllSkins(id){
    var self = this;
    console.log('in reload All Skins');
    axios.get('http://localhost:3002/mySkins/'+id.toString(),{
      'Content-Type': 'application/json'
    }).then(function(res){
      var mySkins = res.data;
      axios.get('http://localhost:3002/skins').then(function(res){

        self.setState({skins: res.data, mySkins: mySkins});
      })

    });

      this.setState({ connected: true, id: id} );

  }
  setPageToRender(NumPage){
    this.setState({ page: NumPage} );
  }
  componentDidMount(){
    var self = this;
    axios.get('http://localhost:3002/skins').then(function(res){

      self.setState({skins: res.data});
    })






  }
  render() {
    var pageToRender = this.state.page;
    var setConnexion = this.setConnexion
    var userId = this.state.id;
    var isConnected = this.state.connected;
    var reloadSkins = this.reloadDeletedSkins;
    var reloadAllSkins = this.reloadAllSkins;

    return (
      <div>
        <MenuBar reloadAllSkins={reloadAllSkins} setPage={this.setPageToRender} setConnexion={setConnexion} isConnected={isConnected} userId={userId}>

        </MenuBar>
       <ContentManager reloadAllSkins={reloadAllSkins} setPage={this.setPageToRender} reloadSkins={reloadSkins} pageToRender={pageToRender} skins={this.state.skins} mySkins={this.state.mySkins} setConnexion={setConnexion} isConnected={isConnected} userId={userId}>

       </ContentManager>

      </div>
    );
  }
}

export default App;
