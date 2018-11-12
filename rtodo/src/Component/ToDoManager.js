import React, { Component } from 'react';
import ToDoList from './ToDoList';
import InputTodo from './InputTodo';
import './todo.css';
import Axios from 'axios';

class ToDoManager extends Component {

    state = {
        todo:'',
        todos:[]
    }
    NewToDoInput = (newTodo) =>{
     
        Axios.post('http://localhost:8080/todos', {todo:newTodo})
        .then (res => {
            const todo = res.data;
            this.addTodo([todo]);
        })
        
    }

    RemoveToDoItem = (removeId)=>{

        Axios.delete('http://localhost:8080/todos', {data:  {id:removeId}})
        .then(res => {
            this.setState({            
                todos: this.state.todos.filter ((data, i)=>  data.id!== removeId)
            });    
        })
          
    }

    CheckToDoItem= (id)=>{

        const todos = this.state.todos;
        const checkedIdx = todos.findIndex(todo=> todo.id === id)
        const chekedTodo = { ...todos[checkedIdx], done: !todos[checkedIdx].done}

        Axios.put('http://localhost:8080/todos', {id:id, done:chekedTodo.done})
        .then (res => {
            const todoRes = res.data;
            this.setState({            
                todos: [...todos.slice(0,checkedIdx),chekedTodo, ...todos.slice(checkedIdx+1,todos.length)] }
    
            );   

        })  
     

        
           
    
    }

    componentDidMount(){
        Axios.get('http://localhost:8080/todos')
        .then(res => {
            const todos = res.data;
            this.addTodo(todos.reverse());          
        });
    }
    addTodo=(todo) =>
    {
        this.setState({
            todos: [ ...this.state.todos,...todo ],
            todo:''
        });
    }
    render() {
        console.log("aaaa");
        return (
            <div className="todo-list-template">
                <div className="title">
                    My To Do List
                </div>
                <InputTodo NewToDoInput={this.NewToDoInput}/>
                <ToDoList                 
                ToDos = {this.state.todos}
                RemoveToDoItem={this.RemoveToDoItem} 
                CheckToDoItem ={this.CheckToDoItem} />
            </div>
        );
    }
}

export default ToDoManager;