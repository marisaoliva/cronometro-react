import React, {Component} from 'react';

class Actions extends Component{



  render(){

    return(
      <div className="actions">
        <button onClick={this.props.stop}>STOP</button>
        <button onClick={this.props.start}>START</button>
      </div>
    )
  }

}

export default Actions;
