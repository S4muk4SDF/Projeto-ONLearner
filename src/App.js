import React from 'react';
import {Route} from 'react-router-dom';

import Home from './components/Home'

function App () {
    return (
      <div>
        <Route exact path="/" component={Home}/>
{/*         
        <Route path="/matematica" component={Matematica}/>
        <Route path="/portugues" component={Portugues}/>
        <Route path="/quimica" component={Quimica}/>
        <Route path="/biologia" component={Biologia}/>
        <Route path="/historia" component={Historia}/>
        <Route path="/geografia" component={Geografia}/> */}
      </div>
    );
}

export default App;
