import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home';
import './App.css';


function App() { //Incluo dentro do fragmento as tags dos componentes criados para aparecer na tela
  return (
    <> 
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
