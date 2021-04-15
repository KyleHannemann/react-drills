import React, {Component} from 'react';

export default class ToDO extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (<input type="text" onChange={this.props.newItem}/>)
    }


}