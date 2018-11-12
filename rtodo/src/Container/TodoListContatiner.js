import React, { Component } from 'react';
import ToDoList from '../Component/ToDoList';
import {connect} from 'react-redux';
import {changeInputTodo,addTodo} from '../store/modules/todosReducer'


RemoveToDoItem = () =>{

}


class TodoListContatiner extends Component {
    render() {
        return (
            <ToDoList                 
                ToDos = {this.props.todos}
                RemoveToDoItem={this.RemoveToDoItem} 
                CheckToDoItem ={this.CheckToDoItem} />
        );
    }
}


//state를 props에 등록해 주는 함수
const mapStateToProps = ({todosReducer}) => (
    {
        todos : todosReducer.todos
    }
)

const mapDispatchToProps = dispatch => (
    {
        changeInputTodo: (value)=>dispatch(changeInputTodo(value)),
        addTodo: ()=>dispatch(addTodo())

    }
);

export default connect(
    //리덕스 스토어가 가지고 있는 state를 props로 넣어준다
    mapStateToProps,
    mapDispatchToProps
)(TodoListContatiner);
