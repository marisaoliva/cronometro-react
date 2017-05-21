import React, {Component} from 'react';
import Timer from './timer';
import Actions from './actions'

class Content extends Component {

  constructor(props){
    super(props);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.counter = this.counter.bind(this);
    this.state={
      timer:0
    }
  }
  counter(){
    this.setState({
      timer: this.state.timer+1
    });

  }
  stop(){
    this.setState({
      timer: 0
    });
    clearInterval(this.interval);
  }
  start(){
    this.interval  = setInterval(this.counter, 1);

  }

  render(){
    return (
      <div className="content">
        <Timer timer={this.state.timer}/>
        <Actions stop={this.stop} start={this.start}/>
      </div>
    );
  }

}



export default Content;
