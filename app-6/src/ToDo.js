import React, {Component} from 'react';

export default class ToDo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let test = this.props.removeItem
        let toDo = this.props.toDo.map(function(el, index){
            return(<div key={index} className="toDoList"><span>{el}</span>
            <button className="completeButton"onClick={test} value={index}>&#x2718;</button>
            </div>)
        })
        return(<div>{toDo}</div>)
    
    }
    
}