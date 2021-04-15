import React, {Component} from 'react';

export default class List extends Component{
    constructor(props){
        super(props);

}
    render(){
        let remove = this.props.remove
        let list = this.props.list.map(function(el, index){
            return (<li className="listItem"key={index}>{el}<button onClick={remove} value={index}>X</button></li>)
        });
      return (<div>{list}</div>)  
    }
}