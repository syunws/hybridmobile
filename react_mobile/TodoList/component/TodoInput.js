import React, { Component } from 'react';
import {StyleSheet, View,TextInput, Button} from 'react-native';

class TodoInput extends Component {
    
    
    enterKeyPress = (e)=>{
        if(e.key === 'Enter'){            
            this.props.todoInputClick();
        }
    }  

    

    render() {     
        return (
            <View className="form">
                <TextInput 
                    type="text"
                    name="todo"
                    value={this.props.todo}
                    placeholder="할일..." 
                    onChangeText = {this.props.todoInputChange}                    
                />
                < Button
                    className="create-button"
                    onPress = {this.props.todoInputClick}    
                    title="추가"
                />
            </View>
        );
    }
}

export default TodoInput;