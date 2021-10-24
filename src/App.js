import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Store from './pages/Store';
import mac from './pages/mac';
import ipad from './pages/ipad';
import iphone  from './pages/iphone';
import watch   from './pages/watch';
import airpods    from './pages/airpods';
import Tvhome   from './pages/Tvhome';
import  online   from './pages/online';
import  acccessories   from './pages/acccessories';
import support from './pages/support';
import Footer from'./components/Footer.js/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
        <Route path='/' exact component={Home} />
        <Route path='/Store' component={Store} />
        <Route path='/support' component={support} />
        <Route path='/ipad' component={ipad} />
        <Route path='/mac' component={mac} />
        <Route path='/iphone' component={iphone} />
        <Route path='/watch' component={watch} />
        <Route path='/airpods' component={airpods} />
        <Route path='/Tvhome' component={Tvhome} />
        <Route path='/online' component={online} />
        <Route path='/acccessories' component={acccessories} />
      </Switch>
      <Footer/>
    </Router>
   
  );
}

export default App;
