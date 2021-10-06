import { Component } from 'react';
import PropTypes from "prop-types";
import './display.module.css';

export class Display extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
