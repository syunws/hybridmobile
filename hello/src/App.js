import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent';
import EventExam from './Component/EventExam';
import ValidationExam from './Component/ValidationExam';
import ScrollerBox from './Component/ScrollerBox';
import IterationExam from './Component/IterationExam';
import LifeCycleSample from './Component/LifeCycleSample'
import Hello from './Component/FunctionCopmonent'

class App extends Component {
  
  state = {
    color :'red'
  }
  render() {
    const name = "sooylee";
    
    return (
      <Fragment>
      <h1>안녕하세요 {name}</h1>
       <p 
        // 코멘트
       >리액트 재미져?</p>

       {/* hihihihi */}     

       {/* <HelloComponent name={"hihi"} ></HelloComponent> 
       <EventExam />
       <ValidationExam />
       <ValidationExam /> */}
       <ScrollerBox ref = {(ref)=>{this.scrollerBox=ref} }/>
       <button 
        onClick= {() =>{
          console.log('onclick');
          //console.log(this.scrollerBox.sum());
          this.scrollerBox.scrollBottom(); 
        }
      }>클릭!!</button>


      <IterationExam></IterationExam>
      <LifeCycleSample color={this.state.color}></LifeCycleSample>
      <Hello name='soo'></Hello>
       </Fragment>
    );
  }
}

export default App;
