import React, { Component } from 'react';
import './todo.css';

class InputTodo extends Component {


    onInputChange = (e) =>
    {       

        this.props.ChangeInput(e.target.value);
    }

    onAddBtnClick = () =>
    {
        this.props.NewToDoInput( );        
    }
    render() {
        return (
            <div className="form-wrapper">
                <div className="form">
                    <input type="text"  placeholder="할일..."  value={this.props.todo} onChange={this.onInputChange}/>
                    <button className="add-button" onClick={this.onAddBtnClick}>추가</button>
                </div>
            </div>
        );
    }
}

export default InputTodo;