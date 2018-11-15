import React, { Component } from 'react';
import {Alert, ActivityIndicator, FlatList,Text, View} from 'react-native';

class TodoComponent extends Component {

state = {
    isLoading:true,
    todos: []
}
componentDidMount()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange= (e) =>{
        if (request.readyState!==4) {
            return;
        }
        if (request.state === 200)
        {
            Alert.alert('success',request.responseText);
            this.setState({
                isLoading:false,
                todos:JSON.parse(request.responseText)
            });
            console.log('success',request.responseText);
        }
        else{
            Alert.alert('error');
            console.warn('error', request.responseText);
        }

    };
    request.open('GET', 'http://192.168.100.102:8080/todos');
    request.send(); 

}

    render() {
        
            if(this.state.isLoading){
                return (
                <View style={{flex:1, padding:20}}></View>
                );
            }
            
            return (
                <View style={{flex:1, paddingTop:20}}>
                
                    <FlatList
                        data={this.state.todos}
                        renderItem = {({item})=><Text>{item.todo}</Text>}
                        keyExtractor = {({id}, index)=> id}
                    />
                </View>
            )
        
    }
}

export default TodoComponent;