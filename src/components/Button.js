import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Button extends Component {
  render() {
    return (
      <a
        href={this.props.url}
        target={this.props.target}
        className={`${ this.props.className }`}
        onClick={this.props.onClick}
      >
        {this.props.text}  
      </a>
    );
  }
}

export default styled(Button)`
  display: block;
  width: 150px;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 10px 15px;
  color: var(--text-color--light);
  border: 2px solid var(--text-color--light);
  transition: all .5s;
  &:hover {
    cursor: pointer;
    background: var(--text-color--light);
    color: var(--text-color);
  }
`;