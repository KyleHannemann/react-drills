import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Login extends Component {
 constructor(props){
   super(props);
   this.state = {
     name: "",
     password: ""
   }
   this.update = this.update.bind(this)
   this.login = this.login.bind(this)
 }
 update(e){
   let id = e.target.id;
   if (id === "password"){
     this.setState({
       password: e.target.value
     })
   }
   else if (id === "userName"){
     this.setState({
       name: e.target.value
     })
   }
   console.log(this.state.name, this.state.password)
 }
 login(){
   let message = `Welcome ${this.state.name}! you're password is ${this.state.password}`;
   alert(message);
 }
 render(){
   return(<div style={{display:"flex", justifyContent:"center"}}>
     <input onChange={this.update}id="userName"placeholder="enter username" type="text"/>
     <input onChange={this.update}id="password" placeholder="enter password"type="text"/>
     <input onClick={this.login} value="Login"type="button"/>
   </div>)
 }
}

export default Login;