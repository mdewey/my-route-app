import React, { useReducer }  from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home'
import NavBar from './NavBar';
import {AppContextInterface, AppState, RouteContext} from './context/useRouteContext';
import reducerFunction from './reducer/';

function App() {
  const [state, dispatch] = useReducer(reducerFunction, {
   
  } as AppState)

  const ctxt = { state, dispatch } as AppContextInterface


  return (
    <Router>
      <RouteContext.Provider value={ctxt}>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      </RouteContext.Provider>
    </Router>
  );
}

export default App;
