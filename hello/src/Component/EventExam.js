import React, { Component } from 'react';

class EventExam extends Component {    

    state = {
        message:"ccc"
    }

    // constructor(prop)
    // {
    //     super(prop);
    //     this.myChange = this.myChange.bind(this);
    // }

    myChange = (e)=>{        
            console.log(this.state.message);
            //this.state.message=  e.target.value;
            
            this.setState(
                {
                    [e.target.name]: e.target.value
                }
            )
    }

    myClick =(e) => {
        alert(this.state.message + " " + this.state.age);
        this.setState({
            message: '',
            age : ''

        });
    }

    myKeyPress = (e)=>{
        if ( e.key === 'Enter')
            this.myClick();
    }
    render(){
        return(
<div>
    <h1>이벤트 실습</h1>
    <input 
    type = "text"
    name = "message"
    placeholder = "입력해 보세요"
    value = {this.state.message}
    onChange={this.myChange}
    onKeyPress={this.myKeyPress}
    />
    
    <input 
    type = "text"
    name = "age"
    placeholder = "입력해 보세요^^"
    value = {this.state.age}
    onChange={this.myChange}
    />
    
    <button onClick={this.myClick}>확인</button>
</div>

        );
    }

    

}
export default EventExam; 