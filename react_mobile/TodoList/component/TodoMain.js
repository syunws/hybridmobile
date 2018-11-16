import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import {StyleSheet, View, Text} from 'react-native';


class TodoListTemplate extends Component {

  todoId = 2;
  state = {
        todo : '', 
        //초기데이터
        todos : [
          {id : 0, todo : '봄봄이랑 놀아주기',done : true},
          {id : 1, todo : 'react 공부하기',done : false}
        ]
      };

  addTodo=(todo) =>{
      this.setState({
        todos:  [...this.state.todos,{id : this.todoId++, todo : this.state.todo,done : false}],
        todo:''
      });           
  }  
  todoRemove = (id) =>{
    console.log(id);
    const {todos} = this.state;
    const index =todos.findIndex(todo => todo.id === id);
    this.setState({
      todos:[
        ...todos.slice(0,index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  todoStateUpdate = (id) =>{

    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done : !todos[index].done
    }
    this.setState({
      todos:[
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
  todoInputClick = (e) =>{
    if(this.state.todo === '' ){
      alert('할일을 입력 하세요^^');
      return ;
    }
    this.addTodo(this.state.todo);
  }

  todoInputChange = (text) =>{
    this.setState({
        todo : text
    });
  }

  render() {
    return (
      <View className={'todo-list-template'}>
        <Text className={'title'}>나의 할일 목록</Text>
        <View className={'form-wrapper'}>
            <TodoInput todoInputChange={this.todoInputChange} todoInputClick={this.todoInputClick} todo={this.state.todo} />
        </View>
        <View className={'todos-wrapper'}>
            <TodoList  todos={this.state.todos} onRemove={this.todoRemove} onToggle={this.todoStateUpdate} />
        </View>

      </View>

    );
  }
}

/*
const styles = StyleSheet.create({
todolisttemplate : {
    background: "white",
    width: 512,
    //box-shadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23),
    margin: "0 auto",
    //margin-top: "4rem"
},
title :  {
    padding :2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: #22b8cf;
    color: white;
},
form-wrapper {
    padding: 1rem;
    border-bottom: 1px solid #22b8cf;
},
todos-wrapper {
   min-height : 5rem;
} 
});
*/
export default TodoListTemplate;