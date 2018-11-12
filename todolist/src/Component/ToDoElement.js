import React, { Component } from 'react';
import './todo.css';
import Axios from 'axios';

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

        this.props.RemoveToDoItem(this.props.ToDo.id);
    }


    onToDoTextClick =(e) =>
    {       
        
        this.props.CheckToDoItem (this.props.ToDo.id);
    }
    render() {
        
        console.log( this.props.ToDo.todo +'init element ' + this.props.ToDo.done );
        return (
            <li className='todo-item' key={this.props.liKey}> 
            <span className={this.props.ToDo.done?'todo-text checked':'todo-text'}  onClick={this.onToDoTextClick} >{this.props.ToDo.todo}</span> 
            {/* <span className={this.props.toDoinputChecked?'todo-text checked':'todo-text'}  onClick={this.onToDoTextClick} >{this.props.toDoinputText}</span>  */}
            <span className="remove" onClick={this.onRemoveClick} >×</span>            
            </li>            
        );
    }
}

export default ToDoElement;