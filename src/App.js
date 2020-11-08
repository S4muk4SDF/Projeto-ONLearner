import React from 'react';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Pagina_Login from './components/Pagina_Login'
import Pagina_Register from './components/Pagina_Register'
import Pagina_Conteudos_EM1 from './components/Pagina_Conteudos_EM1'

import Materia_Portugues from './components/Pagina_Conteudos_EM1/Materia_Portugues'


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Pagina_Login} />
      <Route path="/register" component={Pagina_Register} />

      <Route exact path="/EM1" component={Pagina_Conteudos_EM1} />
      {/* <Route path="/ensinoMedio2" component={Pagina_Conteudos}/>
      <Route path="/ensinoMedio3" component={Pagina_Conteudos}/> */}

      <Route path="/EM1/Portugues" component={Materia_Portugues} />


    </div>
  );
}

export default App;
