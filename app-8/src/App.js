import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      height: 'none',
      weight: 'none'
    }
    this.filterHeight = this.filterHeight.bind(this)
    this.filterWeight = this.filterWeight.bind(this)
  }
  componentDidMount(){
    axios.get('https://swapi.dev/api/people/')
    .then(response=>{console.log(response); this.setState({
      data: response.data.results
    })}).catch(error=>{console.log(error)})
  }
  filterHeight(){
    let sortBy = this.state.height;
    let x;
    let y;
    if (sortBy == "none" || sortBy == "tallest"){
       x = 1;
       y = -1;
       this.setState({height: "short"})
    }
    else{
       x = -1;
       y = 1;
       this.setState({height: "tallest"})

    }
    let tallest = this.state.data.sort((a,b)=>{
     
      if (parseInt(a.height) > parseInt(b.height)){
        return x;
      }
      else return y;
    })
    this.setState({data: tallest})
    
    console.log(tallest)
  }
  filterWeight(){
    let sortBy = this.state.weight;
    let x;
    let y;
    if (sortBy == "none" || sortBy == "heavy"){
       x = 1;
       y = -1;
       this.setState({weight: "light"})
    }
    else{
       x = -1;
       y = 1;
       this.setState({weight: "heavy"})

    }
    let heaviest = this.state.data.sort((a,b)=>{
      if(parseInt(a.mass) > parseInt(b.mass)){
        return x;
      }
      else return y;
    })
    this.setState({data:heaviest})
  }
  render(){
    return(<div id="tabContainer"><table>
      <thead>
      <tr>
        <th>Name</th>
        <th ><button onClick={this.filterHeight}>sort</button>Height</th>
        <th ><button onClick={this.filterWeight}>sort</button>Mass</th>
      </tr>
      </thead>
      <tbody>
      {this.state.data.map((el)=>{
        return(<tr><td>{el.name}</td>
        <td>{el.height}</td>
        <td>{el.mass}</td>
        </tr>)
      })}
      </tbody>
      </table></div>)
  }
}


