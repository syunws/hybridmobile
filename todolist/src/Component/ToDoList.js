import React, { Component } from 'react';
import ToDoElement from './ToDoElement';
import './todo.css';

class ToDoList extends Component {

    shouldComponentUpdate(nextProps, nextState){        
        return this.props.ToDos!== nextProps.ToDos;
    }

    render() {
        return (
            <div className="todos-wrapper">

            
            <ul>
                {/* {this.props.ToDoListData.map(
                    (data, index) => (                    
                        <ToDoElement key={ "ToDoElement"+index } liKey={index} toDoinputText={data} toDoinputChecked={this.props.ToDoListChecked[index]}
                        RemoveToDoItem = {this.props.RemoveToDoItem}
                        CheckToDoItem = {this.props.CheckToDoItem}/>)
                )} */}
                
                {                    
                    this.props.ToDos.map(                    
                    (data, index) => (                    
                        <ToDoElement key={ "ToDoElement"+index } liKey={index} ToDo={data}
                        RemoveToDoItem = {this.props.RemoveToDoItem}
                        CheckToDoItem = {this.props.CheckToDoItem}/>)
                )}
           </ul>
        </div>
        );
    }
}

export default ToDoList;