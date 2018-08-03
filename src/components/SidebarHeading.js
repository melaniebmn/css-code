import React, { Component } from 'react';
import styled from 'styled-components';

class SidebarSubheading extends Component {
  render() {
    return (
      <h3 className={`${ this.props.className }`}>{this.props.heading}</h3>
    );
  }
}

export default styled(SidebarSubheading)`
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 15px;
  padding: 0 0 5px;
  border-bottom: 2px solid var(--text-color);
`;