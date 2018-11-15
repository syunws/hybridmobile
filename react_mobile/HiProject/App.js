/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Button, TextInput, FlatList, SectionList } from 'react-native';
import TodoComponent from './TodoComponent';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    date: 1,
    text: ''
  }
  onPressButton = () => {
    this.setState({
      date: this.state.date + 1
    })
  }

  onChange = (name) => {
    this.setState({
      text: name
    })
  }
  render() {
    const todos = [
      { todo: '리액트 공부하기' },
      { todo: '먹기' },
      { todo: '자기' },
      { todo: '놀기' }
    ];
    return (

      <TodoComponent></TodoComponent>
      /*
      <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigblue}>just bigblue</Text>
            <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
            <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 2, backgroundColor: 'blue' }} />
            <View style={{ flex: 3, backgroundColor: 'darkblue' }} />
          </View>
        </View>
      <View style={{ flex: 1 }}>

        <View style={{ height: 100, backgroundColor: 'green' }}>
          <Text>nav Bar</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'pink' }}></View>
            <View style={{ flex: 1, backgroundColor: 'magenta' }}></View>
          </View>
        </View>
      </View>
*/

      /*
      <ScrollView>
        <Hello></Hello>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
        <Button onPress={this.onPressButton} title="눌러주세요" />
        <Text>{this.state.date}</Text>
        <TextInput placeholder='이름을 입력해요' onChangeText={(name) => this.onChange(name)} />
        <Text style={{ padding: 10, fontSize: 50 }}>{this.state.text}님 반갑습니다. </Text>

        <FlatList data={todos} renderItem={({ item }) =>
          <Text>{item.todo}</Text>} keyExtractor={(item, index) => item.toString()} />

      </ScrollView>
      */
    );
  }
}

class Hello extends Component {
  render() {
    return (
      <View >
        <Text style={styles.instructions}> This is Hello Component </Text>

        <SectionList
          sections={[
            { title: 'Title1', data: ['item1', 'item2'] },
            { title: 'Title2', data: ['item3', 'item4'] },
            { title: 'Title3', data: ['item5', 'item6'] },
          ]}
          renderItem={({ item, index, section }) => <Text>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          )}
          keyExtractor={(item, index) => item + index}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,

  },
  red: {
    color: 'red',
  },
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
