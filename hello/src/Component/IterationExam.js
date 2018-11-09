import React, { Component, Fragment } from 'react';

class IterationExam extends Component {

    state =
        {
            names: ['봄봄', '삐삐', '야옹', '멍멍이'],
            name: ""
        }

    inputClick= () => {
        this.setState({
         names: this.state.names.concat(this.state.name),
         name: ''
        })
    }


    inputChange =  (e) => {
        this.setState(
            {
                name: e.target.value,                
            }
        );
    }

    inputKeyPress = (e) =>{
        if ( e.key === 'Enter')
            this.inputClick();
    }
 
    listDoubleClick = (index) => {
        
        
         this.setState (
             {
                 names: this.state.names.filter ((name, i)=> i !== index)
             }
        )
    }
    render() {


        return (
            <Fragment>
                <input onChange={this.inputChange} onKeyPress={this.inputKeyPress} value={this.state.name}></input>
                <button onClick={this.inputClick}>확인</button>
            <ul>
                {this.state.names.map(
                    (name, index) => (<li key={index} 
                        onDoubleClick={() => this.listDoubleClick(index)}
                        >{name}</li>)
                )}
            </ul>
            </Fragment>
        );
    }
}

export default IterationExam;