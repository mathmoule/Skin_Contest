import React, { Component } from 'react';
import './App.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuItem from './MenuItem';

const ButtonStyle = {
    color: 'white',
};
const blockDrawerStyle = {
  //border: "2px solid violet",
  display: "inline-block",
  marginTop: "2vh",
};
const burgerStyle = {
  fontSize : '1.5em',
};
const DrawerStyle = {
    'background-color': "#101a4c",
    'padding-top': '10vh',
    height: "90vh",
    width: "20vh",
};
class MyDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.RenderMenuItem = this.RenderMenuItem.bind(this);
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  componentDidMount(){

  }

  RenderMenuItem(){ // rend dynamiquement le contenu de la navBar, en fonction de si l'utilisateur est conencté
    var setPage = this.props.setPage;
    var isConnected = this.props.isConnected;
    var userId = this.props.userId;
    var reloadAllSkins = this.props.reloadAllSkins;
    if(isConnected){
      return(
        <div >
          <MenuItem name={'Lobby'} setPage={setPage} numPage={0} reloadable={false} userId={userId}/>
          <MenuItem name={'My Skins'} setPage={setPage} numPage={1} reloadAllSkins={reloadAllSkins} reloadable={true} userId={userId}/>
          <MenuItem name={'Skin Creator'} setPage={setPage} numPage={2} reloadable={false} userId={userId}/>
          <MenuItem name={'Library'} setPage={setPage} numPage={3} reloadAllSkins={reloadAllSkins} reloadable={true} userId={userId}/>
          <MenuItem name={'Rules'} setPage={setPage} numPage={4} reloadable={false} userId={userId}/>
          <MenuItem name={'Contact'} setPage={setPage} numPage={5} reloadable={false} userId={userId}/>
        </div>
      );
    }else{
      return(
        <div>
          <MenuItem name={'Lobby'} setPage={setPage} numPage={0} reloadable={false}/>
          <MenuItem name={'Library'} setPage={setPage} numPage={3} reloadable={false}/>
          <MenuItem name={'Rules'} setPage={setPage} numPage={4} reloadable={false}/>
          <MenuItem name={'Contact'} setPage={setPage} numPage={5} reloadable={false}/>
        </div>
      );
    }
  }
  render() {

    return (
      <div style={blockDrawerStyle}>
        <Button style={ButtonStyle} onClick={this.toggleDrawer('left', true)}><i style={burgerStyle} class={"fas fa-bars"}></i></Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}

        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}

          >
          <div style={DrawerStyle}>
            {this.RenderMenuItem()}
          </div>

          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default MyDrawer;
