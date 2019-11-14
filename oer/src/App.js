import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <header>
        hello OER
      </header>
     
      <Route
        path ='/login'
        component={Login}
      />
      <Route 
        path ='/register'
        component={Register}
      />
      <PrivateRoute 
          path = '/home'
          exact
          component ={Home} 
        />
    </div>
  );
}

export default App;
