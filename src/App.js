import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import './assets/css/App.css';
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
        <div className="App">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
