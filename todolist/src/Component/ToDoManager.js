import React, { Component } from 'react';
import ToDoList from './ToDoList';
import InputTodo from './InputTodo';
import './todo.css';

class ToDoManager extends Component {

    state = {
        todoListData: [],
        todoListChecked:[],
        toDos:[]
    }
    NewToDoInput = (newTodo) =>{
        this.setState({
            todoListData : this.state.todoListData.concat(  newTodo ),
            todoListChecked : this.state.todoListChecked.concat(false),
            toDos: this.state.toDos.concat({text:newTodo, done: false})
        });        
    }

    RemoveToDoItem = (removeIdx)=>{
        this.setState({
            todoListData : this.state.todoListData.filter ((name, i)=> i !== removeIdx),
            todoListChecked : this.state.todoListChecked.filter ((name, i)=> i !== removeIdx),
            toDos: this.state.toDos.filter ((name, i)=> i !== removeIdx),
        });        
    }

    CheckToDoItem= (checkedIdx)=>{
        console.log("checkedIdx" + checkedIdx);
        console.log(this.state.toDos);
        const toDos = this.state.toDos;
        
        const chekedTodo = { ...this.state.toDos[checkedIdx], done: !this.state.toDos[checkedIdx].done}
        this.setState({
            todoListChecked : this.state.todoListChecked.map ((data, i)=>(i === checkedIdx) ? !data : data),           
            toDos: [...toDos.slice(0,checkedIdx),chekedTodo, ...toDos.slice(checkedIdx+1,toDos.length)] }

        );     
    
    }

    render() {
        return (
            <div className="todo-list-template">
                <div className="title">
                    My To Do List
                </div>
                <InputTodo NewToDoInput={this.NewToDoInput}/>
                <ToDoList ToDoListData={this.state.todoListData} 
                ToDoListChecked={this.state.todoListChecked}
                ToDos = {this.state.toDos}
                RemoveToDoItem={this.RemoveToDoItem} 
                CheckToDoItem ={this.CheckToDoItem} />
            </div>
        );
    }
}

export default ToDoManager;