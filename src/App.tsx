import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

function App() { //Incluo dentro do fragmento as tags dos componentes criados para aparecer na tela
  return (
  <>
    <Home /> 
    <Login />
  </>
  );
}

export default App;
