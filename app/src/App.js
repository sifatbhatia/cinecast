import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MapView from './Components/MapView/MapView';
import WeatherSearch from './Components/Search/WeatherSearch';
import ListView from './Components/List/List';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/mapview">
              <MapView />
            </Route>
            <Route path="/search">
              <WeatherSearch />
            </Route>
            <Route path="/list">
              <ListView />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
