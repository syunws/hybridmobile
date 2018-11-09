
import React, { Component } from 'react';
import HobbyComponent from './HobbyComponent';
class HelloComponent extends Component {


    
    render() {
        let flag = false;

        const style = 
        {
            backgroundColor: 'blue',
            border : "1px solid black",
            height : '200px',
            width :'300px'
        }
        return (
            
            <div>
                <p>나의 이름은 {this.props.name} 입니다</p>

            <button>aaa</button>

            
            <div className = 'mybox'></div>
            
                {flag? 
                <HobbyComponent></HobbyComponent> : (<div>없어요!</div>)}
                {flag && <HobbyComponent />}

            

            </div>

        );
    }
}
// HelloComponent.defaultProps = {
//     name: '익명'
// }
export default HelloComponent; 