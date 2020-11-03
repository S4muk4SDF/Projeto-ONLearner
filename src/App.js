import React from 'react';
import {Route} from 'react-router-dom'

import Home from './components/Home'
import Pagina_Login from './components/Pagina_Login'
import Pagina_Register from './components/Pagina_Register'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>

      <Route path="/login" component={Pagina_Login}/>
      <Route path="/register" component={Pagina_Register}/>
    </div>
  );
}

export default App;
