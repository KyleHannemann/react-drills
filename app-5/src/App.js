import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageSource: "https://via.placeholder.com/800x800",

      
    }
  }
  render(){
    return(<div><Image image={this.state.imageSource}/></div>)
  }
}

export default App;
