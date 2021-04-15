import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toDo: [],
     }
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
  }
  addItem(value){
    let toDo = this.state.toDo;
    toDo.push(value);
    this.setState({
      toDo: toDo})
      console.log(this.state.toDo)
  }
  remove(e){
    let toDo = this.state.toDo;
    toDo.splice(e.target.value, 1);
    this.setState({
      toDo: toDo
    })
  }
  render(){
    return(<div id="main">
      <h4>TO DO:</h4>
      <NewTask addItem={this.addItem}/>
      <List remove={this.remove} list={this.state.toDo}/>
    </div>)
  }
}
export default App;
