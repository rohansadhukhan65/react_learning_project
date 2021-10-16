import React  from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { Suspense, lazy } from 'react';

// components
import Navbar from './components/sub_component/Navbar';
import Main from './components/Main';
import About from './components/About';


function App() {
  return (
        <Router>
            <>
                <Navbar title="TextUtilsd" about="About TextUtils"/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/about" exact component={About}/>
                </Switch>
            </>
        </Router>
  );
}

export default App;
