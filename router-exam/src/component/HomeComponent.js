import React, { Component } from 'react';
import test from './test.module.css'
class HomeComponent extends Component {
    render() {
        return (
            <div>
                <h1 className = {test.test}>HOME 페이지 입니다.</h1>
                <button>INTRODUCTION</button>
                <button>SHOPPING</button>
            </div>
        );
    }
}

export default HomeComponent;