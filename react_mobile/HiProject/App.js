/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Button, TextInput, FlatList } from 'react-native';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    date :1,
    text : ''
  }
  onPressButton = () =>{
    this.setState({
      date: this.state.date +1
    })
  }

  onChange = (name) => {
    this.setState({
      text : name
    })
  }
  render() {
    const todos= [
      {todo:'리액트 공부하기'},
      {todo:'먹기'},
      {todo:'자기'},
      {todo:'놀기'}
    ];
    return (
      <ScrollView>
        <Hello></Hello>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <Button onPress={this.onPressButton} title="눌러주세요" />
        <Text>{this.state.date}</Text>
        <TextInput placeholder='이름을 입력해요' onChangeText={(name) => this.onChange(name)} /> 
        <Text style={{padding:10, fontSize:50}}>{this.state.text}님 반갑습니다. </Text>

        <FlatList data = {todos} renderItem={({item}) => 
        <Text>{item.todo}</Text> } keyExtractor = {(item, index) => item.toString()} />

      </ScrollView>
    );
  }
}

class Hello extends Component {
  render(){
    return (
      <View >
        <Text style = {styles.instructions}> This is Hello Component </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
