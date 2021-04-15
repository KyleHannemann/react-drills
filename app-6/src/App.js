import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDo: [],
      newToDo: '',
    }
    this.toDoUpdate = this.toDoUpdate.bind(this);
    this.addToDo = this.addToDo.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  toDoUpdate(e){
      this.setState({newToDo: e.target.value})
  }
  addToDo(){
    let toDoList = this.state.toDo;
    let addNew = this.state.newToDo;
    toDoList.push(addNew);
    this.setState({
      toDo : toDoList
    })
    console.log(this.state.toDo)
  }
  removeItem(e){
    let toDoList = this.state.toDo;
    toDoList.splice(e.target.value, 1)
    this.setState({
      toDo: toDoList
    })
  }
  render(){
    return(
    <div id="main">
      <h4>To DO's:</h4>
      <div id="inputContainer">
      <input id="toDoText" type="text" placeholder="to do:" onChange={this.toDoUpdate}/>
      <input id="toDoButton" type="button" value="add to do" onClick={this.addToDo}/> 
      </div>
      <ToDo removeItem={this.removeItem} toDo={this.state.toDo}/>
    </div>
    )
  }
}

export default App;
