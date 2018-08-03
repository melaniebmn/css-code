import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import styled from 'styled-components';
import './assets/css/App.css';
import Gradient from './Gradient';
import Header from './components/Header';

class App extends Component {
  render() {
    let history = createBrowserHistory();

    history.listen(location => {
      setTimeout(() => {
        if (location.action === 'POP') {
          return;
        }

        window.scrollTo(0, 0);
      });
    });

    return (
      <Router history={history}>
        <div className={`App ${ this.props.className }`}>
          <Header />
          <Route exact path="/gradient" component={Gradient} />
        </div>
      </Router>
    );
  }
}

export default styled(App)`
  margin: 60px 0 0;
`;
