import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Input extends Component {
  render() {
    return (
      <input
        className={`${ this.props.className }`}
        type={this.props.type}
        placeholder={this.props.placeholder}
        min={this.props.min}
        max={this.props.max}
      />
    );
  }
}

export default styled(Input)`
  width: 65px;
  font-size: 18px;
  text-align: center;
  padding: 5px 0;
  background: 0;
  color: inherit;
  border: 2px solid var(--text-color);
  ${props => props.small && css`
    width: 50px;
  `}
  ${props => props.large && css`
    width: 95px;
  `}
`;