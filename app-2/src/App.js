import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      array: ["hello", 'how', 'are', 'you','doing','today','?'],
      clicked: false
    }
    this.showArr = this.showArr.bind(this)
  }
  showArr(){
    let parent = document.getElementById('mainDiv');

    if (this.state.clicked === true){
      while(parent.firstChild){
        parent.removeChild(parent.firstChild)
      }

    }
    let arr = this.state.array;
    for (var i = 0; i < arr.length; i++){
      let x = document.createElement('div');
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      x.innerHTML = arr[i];
      x.classList.add("text")
      x.style.backgroundColor = "#"+randomColor;
      parent.appendChild(x);
    }
    this.setState({
      clicked: true
    })
  }
  render(){
    return(<div> <button id="but"onClick={this.showArr}>Click Me</button>
    <div id="mainDiv">
    </div></div>)
  }

}
