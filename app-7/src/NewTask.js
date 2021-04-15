import React, {Component} from 'react';
import ToDo from './ToDo';


export default class NewTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: ''
        }
        this.newItem = this.newItem.bind(this);
    }
    newItem(e){
        this.setState({
            item: e.target.value
        })
       
    }
    render(){
        return(<div id="inputs"><ToDo newItem={this.newItem}/>
        <button onClick={()=>{this.props.addItem(this.state.item)}}>Add</button></div>)
    }
}