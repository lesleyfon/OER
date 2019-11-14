import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import RenderLoginRegister from './Components/Login/RenderLoginRegister';


function App() {
  return (
    <div className="App">
      <Route
        path ='/'
        exact
        component={RenderLoginRegister}
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
