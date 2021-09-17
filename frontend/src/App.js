// import libs
import { Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

// creating an App with 3 Routes: /, /login, /register 
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
