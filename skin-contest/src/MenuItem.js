import React, { Component } from 'react';
import './App.css';

const MenuItemStyle = {
  width: 'calc(100% - 15px)',
  height: '5vh',
  'font-size': '1.2em',
  'padding-left': '15px',
  display: 'flex',
};

const ItemNameStyle = {
  'margin-top' : 'auto',
  'margin-bottom' : 'auto',
};
class MenuItem extends Component {
  constructor(props) {
    super(props);
   
    this.state = { Selected: 0 };
    
  }

  componentDidMount(){
    var name = this.props.name;

    if(name === "Lobby"){
      this.setState({Selected : true});
    }

  }

  render() {

    var onView = this.props.onView;
    var name = this.props.name;
    var setPage = this.props.setPage;
    var numPage = this.props.numPage;
    var reloadable = this.props.reloadable;
    var reloadAllSkins = this.props.reloadAllSkins;
    var userId = this.props.userId;
    if(reloadable === true){
      return (
        <div style={MenuItemStyle} className={'NavItem'}  onClick={function(){ setPage(numPage); reloadAllSkins(userId);     }}>
          <div style={ItemNameStyle} >
            {name}
          </div>
        </div>
      );
    }else{
      return (
        <div style={MenuItemStyle} className={'NavItem'} onClick={function(){ setPage(numPage);      }}>
          <div style={ItemNameStyle} >
            {name}
          </div>
        </div>
      );
    }
    
  }
}

export default MenuItem;
