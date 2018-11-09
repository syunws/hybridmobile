import React, { Component } from 'react';
import './todo.css';

class ToDoElement extends Component {


    shouldComponentUpdate(nextProps, nextState){
        return this.props.ToDo!== nextProps.ToDo;
    }

    state = 
    {
        isChecked:false
    }
    onRemoveClick = ()=>
    {      

        this.props.RemoveToDoItem(this.props.liKey);
    }
    onToDoTextClick =(e) =>
    {        
        console.log( 'onToDoTextClick' + this.props.liKey);
        this.props.CheckToDoItem (this.props.liKey);
    }
    render() {
        console.log( this.props.ToDo.text +'init element ' + this.props.ToDo.done );
        return (
            <li className='todo-item' key={this.props.liKey}> 
            <span className={this.props.ToDo.done?'todo-text checked':'todo-text'}  onClick={this.onToDoTextClick} >{this.props.ToDo.text}</span> 
            {/* <span className={this.props.toDoinputChecked?'todo-text checked':'todo-text'}  onClick={this.onToDoTextClick} >{this.props.toDoinputText}</span>  */}
            <span className="remove" onClick={this.onRemoveClick} >×</span>            
            </li>            
        );
    }
}

export default ToDoElement;