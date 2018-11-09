import React, { Component } from 'react';
import './ValidationExam.css';

class ValidationExam extends Component {

    state =
    {
        password: ""
    }


    pwdChange = (e)=>{                        
        
        this.setState(
            {
                password: e.target.value,
                //passwordClassName: ""                
            }
        );
    }
    validateClick = (e)=>{
        
        /*this.state.password =='1234'?   
        this.setState( {
            passwordClassName: "success"
            })  :this.setState( {
            passwordClassName: "failure"
            }) ; 
            */

           this.setState(
            {
                
                clicked:true,
                validated: this.state.password =="1234"
            }); 

            this.input.focus();


    }
    render() {
        return (
            <div>
                <h1>비밀번호 입력 테스트</h1>
                <input name="password" type="password"
                ref={(ref) => {this.input=ref}}
                onChange={this.pwdChange}
                className={this.state.clicked? (this.state.validated? "success":"failure"):""}></input>
                <button name="validateBtn"
                onClick={this.validateClick}
                >확인</button>
            </div>
        );
    }
}

export default ValidationExam;