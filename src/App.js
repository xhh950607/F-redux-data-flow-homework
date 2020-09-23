import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Header from './layout/Header';
import Menu from './layout/Menu';
import Home from './views/Home';
import { menuOptions } from './utils';
import './App.scss';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Router>
            <Header />
            <Menu />
            <main className="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {menuOptions.map(({ path, component }) => (
                  <Route key={path} path={path}>
                    {component}
                  </Route>
                ))}
                <Route path="*">
                  <Home />
                </Route>
              </Switch>
            </main>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
