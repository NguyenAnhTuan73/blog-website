import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalStyle } from './data';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route  path='/blog'> <Blog/> </Route>
        <Route  path='/about'> <About/> </Route>
        <Route  path='/contact'> <Contact/> </Route>
      </Switch>
      <Footer/>
      
    </Router>
  );
}

export default App;
