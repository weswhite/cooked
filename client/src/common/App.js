import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Header from './header/Header';
import CalendarMain from '../calendar/calendar-main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/calendar" component={CalendarMain}/>
        </Switch> 
      </div>
    </div>
  );
}

export default App;