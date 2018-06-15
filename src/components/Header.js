import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 33px;
  font-weight: 300;
  a {
    color: inherit;
  }
  @media only screen and (max-width: 767px) {
    font-size: 25px;
    align-items: center;
    margin: 0 auto 20px;
  }
`;

const Menu = styled.ul`
  max-width: 450px;
  font-size: 22px;
  align-self: flex-end;
  li {
    align-items: flex-end;
    transition: all .3s;
    @media only screen and (min-width: 768px) {
      &:hover {
        color: var(--text-color--light);
      }
      .active {
        color: var(--text-color--light);
      }
    }
  }
  a {
    color: inherit;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    align-self: center;
    li {
      align-items: center;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <header className={`grid ${ this.props.className }`}>
        <Logo className="grid__col-sm-4 grid__col-12">
          <a href="/">
            &lt; CSS-Code /&gt;
          </a>
        </Logo>
        <nav className="grid__col-sm-8 grid__col-12">
          <Menu className="grid">
            <li className="grid__col-auto">
              <NavLink to="box-shadow" activeClassName="active">Box-shadow</NavLink>
            </li>
            <li className="grid__col-auto">
              <NavLink to="css-gradient" activeClassName="active">CSS-gradient</NavLink>
            </li>
          </Menu>
        </nav>
      </header>
    );
  }
}

export default styled(Header)`
  position: fixed;
  z-index: 9999;
  align-items: center;
  padding: 15px 35px;
  background: var(--header-bg);
`;