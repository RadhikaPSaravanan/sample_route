import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import User from './User'
function App(){
  return(
  <Router>
  <div>
  <header></header>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to=  
  {
    {
      pathname : "/about", 
      state : {
        from : "root"
        }
    }
  }
  
  >About</Link></li>
  <li><Link to="/user/john/mathew">User</Link></li>
  </ul>
  </div>
  <div>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/user/:first_name/:last_name" component={User}/>
  </Switch>
  </div>
  </Router>
  );
}

export default App;