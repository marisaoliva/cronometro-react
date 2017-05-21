import React, {Component} from 'react';
import { extractTimeParts } from '../lib/utils';

class Timer extends Component {

  constructor(props){
    super(props);
    this.props= props;

  }

  render(){
    const {hours, minutes, seconds, milliseconds} = extractTimeParts(this.props.timer);
    console.log(this.props.timer);
    return (
    <div className="timer">
      <span className="timer-m">{minutes}:</span>
      <span className="timer-s">{seconds}:</span>
      <span className="timer-ms">{milliseconds}</span>
    </div>
    );
  }

}
Timer.defaultProps = {
  minutes: '00:',
  seconds:'00:',
  milliseconds:'00'
};

export default Timer;
