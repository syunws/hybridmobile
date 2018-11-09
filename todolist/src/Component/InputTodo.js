import React, { Component } from 'react';
import './todo.css';

class InputTodo extends Component {

    state = {
        newToDoIn: ""
    }
    onInputChange = (e) =>
    {
        this.setState({
            newToDoIn: e.target.value
        });
    }

    onAddBtnClick = () =>
    {
        this.props.NewToDoInput(this.state.newToDoIn );
        this.setState({
            newToDoIn: ''
        });
    }
    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <input type="text"  placeholder="할일..."  value={this.state.newToDoIn} onChange={this.onInputChange}/>
                    <button className="add-button" onClick={this.onAddBtnClick}>추가</button>
                </div>
            </div>
        );
    }
}

export default InputTodo;