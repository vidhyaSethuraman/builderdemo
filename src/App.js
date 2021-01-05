import {useState, useEffect} from 'react';
import Banner1 from './components/Banner1'
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
function App() {

  

  return (
    < >
     <Router>
      <Route path="/" component={Header} />
        <Route path="/about" component={Banner1} />
     </Router>
     
    </>
  );
}

export default App;
