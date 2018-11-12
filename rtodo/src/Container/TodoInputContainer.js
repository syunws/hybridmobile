import React, { Component } from 'react';
import InputTodo from '../Component/InputTodo';
import {connect} from 'react-redux';
import {changeInputTodo,addTodo} from '../store/modules/todosReducer'


class TodoInputContainer extends Component {

    changeInputTodo = (value)=>{
        this.props.changeInputTodo(value);
    }
    addTodo = ()=>{
        this.props.addTodo();
    }


    render() {
        return (
            <InputTodo NewToDoInput={this.addTodo} ChangeInput={this.changeInputTodo} />
        );
    }
}


//state를 props에 등록해 주는 함수
const mapStateToProps = ({todosReducer}) => (
    {
        todo : todosReducer.todo
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
)(TodoInputContainer);