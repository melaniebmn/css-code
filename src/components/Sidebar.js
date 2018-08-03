import React, { Component } from 'react';
import styled from 'styled-components';

class Sidebar extends Component {
  render() {
    return (
      <aside className={`${ this.props.className }`}>
        {this.props.children}
      </aside>
    );
  }
}

export default styled(Sidebar)`
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 275px;
  height: 100vh;
  padding: 95px 25px 30px;
  background: var(--brand-color);
`;