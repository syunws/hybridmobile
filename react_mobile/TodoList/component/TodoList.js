import React, { Component } from 'react';
import TodoItem from './TodoItem';

import {StyleSheet, View,FlatList,Text} from 'react-native';

class TodoList extends Component {
    
    render() {
        const todos = this.props.todos;

        
        // const todoList = todos.map(
        //     todo => (
        //         <TodoItem
        //             key={todo.id}
        //             todo={todo.todo}                   
        //             todoId={todo.id}
        //             done={todo.done}
        //             onToggle={()=>this.props.onToggle(todo.id)}
        //             onRemove={()=>this.props.onRemove(todo.id)}
        //         />
        //     )
        // );
       return (

           <FlatList style={stylesTodoList.todoitemlist} data={todos} renderItem={({ item }) =>
              <TodoItem 
              todo={item.todo}                   
              todoId={item.id}
              done={item.done}
              onToggle={()=>this.props.onToggle(item.id)}
              onRemove={()=>this.props.onRemove(item.id)}
              />} 
              keyExtractor={(item, index) => item.toString()} />


        );
    }
}

export default TodoList;

const stylesTodoList = StyleSheet.create({

todoitemlist: {
    //list-style:none,
    margin: 0,
    padding: 0
}
});
