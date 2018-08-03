import React, { Component } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  top: 3px;
  left: 0;
  font-size: 15px;
  text-transform: uppercase;
  padding: 4px 0 4px 35px;
  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    border-radius: 100%;
    box-sizing: border-box;
  }
  &:before {
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border: 2px solid var(--text-color);
  }
  &:after {
    top: 7px;
    left: 7px;
    width: 10px;
    height: 10px;
  }
`;

class RadioBtn extends Component {
  render() {
    return (
      <div className={`grid__col-auto ${ this.props.className }`}>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
        />
        <Label>{this.props.label}</Label>
      </div>
    );
  }
}

export default styled(RadioBtn)`
  position: relative;
  input {
    z-index: 1;
    opacity: 0;
    position: absolute;
    top: 9px;
    left: 6px;
    cursor: pointer;
  }
  input[type=radio]:checked + label {
    &:before {
      border-color: var(--text-color--light);
    }
    &:after {
      background: var(--text-color--light);
    }
  }
`;