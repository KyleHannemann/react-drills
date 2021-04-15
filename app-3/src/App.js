import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        ogArray: [ "AK - Alaska", 
        "AL - Alabama", 
        "AR - Arkansas", 
        "AS - American Samoa", 
        "AZ - Arizona", 
        "CA - California", 
        "CO - Colorado", 
        "CT - Connecticut", 
        "DC - District of Columbia", 
        "DE - Delaware", 
        "FL - Florida", 
        "GA - Georgia", 
        "GU - Guam", 
        "HI - Hawaii", 
        "IA - Iowa", 
        "ID - Idaho", 
        "IL - Illinois", 
        "IN - Indiana", 
        "KS - Kansas", 
        "KY - Kentucky", 
        "LA - Louisiana", 
        "MA - Massachusetts", 
        "MD - Maryland", 
        "ME - Maine", 
        "MI - Michigan", 
        "MN - Minnesota", 
        "MO - Missouri", 
        "MS - Mississippi", 
        "MT - Montana", 
        "NC - North Carolina", 
        "ND - North Dakota", 
        "NE - Nebraska", 
        "NH - New Hampshire", 
        "NJ - New Jersey", 
        "NM - New Mexico", 
        "NV - Nevada", 
        "NY - New York", 
        "OH - Ohio", 
        "OK - Oklahoma", 
        "OR - Oregon", 
        "PA - Pennsylvania", 
        "PR - Puerto Rico", 
        "RI - Rhode Island", 
        "SC - South Carolina", 
        "SD - South Dakota", 
        "TN - Tennessee", 
        "TX - Texas", 
        "UT - Utah", 
        "VA - Virginia", 
        "VI - Virgin Islands", 
        "VT - Vermont", 
        "WA - Washington", 
        "WI - Wisconsin", 
        "WV - West Virginia", 
        "WY - Wyoming"],

      };
      this.changeText = this.changeText.bind(this);
      this.showArr = this.showArr.bind(this)
  }
  changeText(event){
      let filterBy = event.target.value.toUpperCase();
      let filteredArr = this.state.ogArray.filter(function(el){
        return el.toUpperCase().includes(filterBy);
      })
      let parent = document.getElementById("main");
      while(parent.firstChild){
        parent.removeChild(parent.firstChild);
      }
      for (var i = 0; i < filteredArr.length; i++){
        let el = document.createElement("div");
        el.innerHTML = filteredArr[i];
        el.classList.add("text")
        parent.appendChild(el);
      }
      console.log(filteredArr)

  }
  componentDidMount() {
    window.addEventListener('load', this.showArr);
 }
  showArr(){
    let x = document.getElementById("main");
    let ogArray = this.state.ogArray;
    for (var i = 0; i < ogArray.length; i++){
      let y = document.createElement("div");
      y.innerHTML = ogArray[i];
      y.classList.add("text")
      x.appendChild(y);
    }
  }
  render(){
    
    return(<div>
      <input placeholder="filter by state" onChange={this.changeText}/>
      <div id="main"></div>
    </div>)
  }
 
}

