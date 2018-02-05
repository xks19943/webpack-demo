
import React,{Component} from 'react';

var config = require('./config.json');
import Styles from './Greeter.css';
class Greeter extends Component{
  render() {
    return (
      <div className={Styles.root}>
        <div>
          {config.greetText}
        </div>
        <div>
          {'嘻嘻哈哈'}
        </div>
        <div>
          {'呼呼呼呼'}
        </div>
      </div>

    );
  }
}

export default Greeter

