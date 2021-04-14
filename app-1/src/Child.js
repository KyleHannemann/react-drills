import React, {Component} from 'react';

export default class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }
    changeText(e){
        this.setState({
            text: e.target.value,
        })
    }
    render(){
        return(<div id="wrapper"><input id="input" onChange={(e)=>this.changeText(e)}/>
        <div id="display">{this.state.text}</div>
        </div>)
    }
}