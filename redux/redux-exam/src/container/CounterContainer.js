import React, { Component } from 'react';
import Counter from '../component/Counter';
import {connect} from 'react-redux';
import {increment,decrement} from '../store/modules/Counter'

class CounterContainer extends Component {

    increment = () =>{
        this.props.increment();
    }

    decrement = () =>{
        this.props.decrement();
    }

    render() {
        return (
            <Counter 
            value={this.props.number}
            onIncrement={this.increment}
            onDecrement={this.decrement}
            />
        );
    }
};

//state를 props에 등록해 주는 함수
const mapStateToProps = ({counter}) => (
    {
        number : counter.number
    }
)

const mapDispatchToProps = dispatch => (
    {
        increment: ()=>dispatch(increment()),
        decrement: ()=>dispatch(decrement())

    }
);

export default connect(
    //리덕스 스토어가 가지고 있는 state를 props로 넣어준다
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)
;