import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './Login';

class App extends Component {
 constructor(props){
   super(props);
 }
 render(){
   return(<Login />)
 }
}

export default App;