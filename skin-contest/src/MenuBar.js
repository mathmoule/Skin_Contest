import React, { Component } from 'react';
import './App.css';
import MyDrawer from './MyDrawer';
import UserManager from './UserManager';
import Triangle from './logo-triangle.svg';

const logoMenuBarStyle = {
  width: "5vh",
  height: "6vh",
  margin: 'auto',
  cursor: 'pointer',
};

const MenuBarStyle = {
    height: "8vh",
    width: "100%",
    "background-color": "#101a4c",
    "box-shadow": "0 20px 20px 0 rgba(0,0,0,.2)",
    "position": "fixed",
    "top": "0",
    "z-index": "11",

    display: 'flex',
};

const UserManagerStyle = {

};
class MenuBar extends Component {

  render() {
    var setPage = this.props.setPage;
    var isConnected = this.props.isConnected;
    var userId = this.props.userId;
    var reloadAllSkins = this.props.reloadAllSkins;
    return (
      <div style={MenuBarStyle}>
        <MyDrawer setPage={setPage} isConnected={isConnected} userId={userId} reloadAllSkins={reloadAllSkins}>

        </MyDrawer>
        <img style={logoMenuBarStyle} src={Triangle} alt={"logo blast pro series"} onClick={setPage.bind(this, 0)}/>
        <UserManager style={UserManagerStyle} setPage={setPage} isConnected={isConnected} userId={userId} >

        </UserManager>
      </div>
    );
  }
}

export default MenuBar;
