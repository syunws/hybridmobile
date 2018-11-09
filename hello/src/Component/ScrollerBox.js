import React, { Component } from 'react';

class ScrollerBox extends Component {  
    scrollBottom = () =>{
        console.log('scrollBottom');
        const scrollHeight = this.box.scrollHeight; 
        const clienthHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - clienthHeight;
        
    }
    sum= () =>{
        console.log("sum called!");
    }
    render() {
        const style={
            border : '1px solid black',
            height : '200px',
            width : '200px',
            overflow : 'auto',
            position : 'relative'
        }
        const innerStyle = {
            width : '100%',
            height : '500px',
            background :'linear-gradient(white, black)'
        }
        return (
            <div
            
                style = {style}       
                ref = {(ref) =>this.box= ref} >
                <div style={innerStyle}></div>                
            </div>
        );
    }
}

export default ScrollerBox;