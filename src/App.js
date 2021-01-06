import {useState, useEffect} from 'react';
import HowToPlayPage from './components/HowToPlayPage';
import IndexPage from './components/IndexPage';
import PromotionsPage from './components/PromotionsPage';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
     <Router>
        <Switch>
            
            <Route path="/how-to-play" component={HowToPlayPage} />
            <Route path="/promotions" component={PromotionsPage}/>
            <Route path="/" component={IndexPage} />
        </Switch>
     </Router>
    </>
  );
}

export default App;
