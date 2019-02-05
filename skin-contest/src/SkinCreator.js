import React, { Component } from 'react';
import './App.css';
import AKK7 from './AK-K7-transparent.png';
import BkgroundCircle from './background-circle.svg';
import axios from "axios";
const ContentStyle = {
    width: '100%',
    height: 'calc(100vh - 1px)',
    backgroundImage: 'url("'+BkgroundCircle+'")',
    backgroundSize: 'cover',
    paddingTop: "1px",

}

const CreatorBox = {

    height: 'fit-content',
    width: "50vh",
    margin: 'auto',
    //border: '1px solid white',
    borderRadius: "70vh",
    padding: "10vh",
    marginTop: "35vh",

};

const canvasImage = {

    borderRadius: "0.5em",
    overflow: 'hidden',
    backgroundColor: 'black',

    width: '50vh',
    height: '18vh',

    backgroundImage: "url('')",
    backgroundSize: "cover",
    backgroundPosition: "center",

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

const formBox = {
    margin: 'auto',
    color: '#101a4c',
};
const SaveBtnStyle = {
    backgroundColor: 'white',
    color: '#be2d7d',
    padding: '8px',
    borderRadius: "0.5em",
    width: 'fit-content',
    fontWeight: 'bold',
    fontSize: "0.7em",
    margin: 'auto',
    cursor: 'pointer',
    boxShadow: "2px 2px 2px 3px rgba(0, 0, 0, 0.2)",
};
class SkinCreator extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.saveToServer = this.saveToServer.bind(this);
    }

  setBackground(){

    var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
       document.getElementById('gunBox').style.backgroundImage = "url(" + reader.result + ")";
    }
    if(file){
       reader.readAsDataURL(file);
     }else{
     }

  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  saveToServer(){
    var userId = this.props.userId;
    var name = document.getElementById('skinsName').value;
    var gun = document.getElementById('selectGun').value;

    var formData = new FormData();
    var filed = document.getElementById("file").files[0];

    formData.append('file', filed);

    axios.post('http://localhost:3002/skin', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(function(res){

        axios({
            method: 'post',
            url: 'http://localhost:3002/skinData/'+name.toString()+"/"+gun.toString()+"/"+res.data.toString()+"/"+userId,
          }).then(
              alert('Your skin has been saved')
          )
    }
    ).catch(

    );

  }

  render() {
      var setBackground = this.setBackground;
       return (
      <div style={ContentStyle}>

        <div style={CreatorBox}>
            <div style={canvasForm}> {/* Form Box*/}
                <div style={formBox}>
                    <select id={'selectGun'} className={'formSkinCreator'} placeholder={'Select a weapon'}>
                        <option value={'1'}>AWP</option>
                        <option value={'2'}>AK-47</option>
                        <option value={'3'}>M4A1-S</option>
                    </select>
                </div>
                <div style={formBox}>
                    <input id={'skinsName'} className={'formSkinCreator'} type={'text'} placeholder={"Skin's Name"}/>
                </div>
            </div>

            <div id={'gunBox'} style={canvasImage}> {/* Skin Visualisation Box*/}




                <img id={'gun'} alt={'gun'} src={AKK7} style={GunPatchworkStyle} />




            </div>
            <div style={buttonBox}>
                <input id={'file'} className={'buttonStyle'} type={'file'} onChange={setBackground}/>
            </div>
            <div style={buttonBox}>
                
                <div className={'buttonStyle'} style={SaveBtnStyle} onClick={this.saveToServer}>
                    SAVE AND SUBMIT TO THE CONTEST
                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default SkinCreator;
