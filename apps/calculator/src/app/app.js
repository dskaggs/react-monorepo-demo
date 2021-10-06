import { Component } from 'react';
import { Display } from '@react-demo/web-react-calculator-ui-display';
import { ButtonPanel } from '@react-demo/web-react-calculator-ui-button-panel'
import { calculate } from '@react-demo/web-react-calculator-util-logic'

import styles from './app.module.css';

export class App extends Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
