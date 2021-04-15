import React from 'react';
import '../node_modules/mana-font/css/mana.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Library from './pages/Library';
import Create from './pages/Create';
import './index.css'
import Navbar from './components/navbar';
import "@saeris/typeface-beleren-bold"

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/new">
            <Create />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
