import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
//import {Department} from './Department';
import {Books} from './Book';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Library
     </h3>

     <Navigation/>

     <Switch>
     
       <Route path='/library' component={Books}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
