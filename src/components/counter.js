import React, { Component } from 'react';
import Header from './header';
import Content from './content';

class Counter extends Component {
  

  render(){
    return (
      <div className="crono">
        <Header className="header"/>
        <Content className="content"/>
      </div>
    );
  }
}

export default Counter;
