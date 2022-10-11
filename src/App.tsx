import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPost from './components/postagens/deletarPost/DeletarPost';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
          
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrousuario" element={<CadastroUsuario />} />
              <Route path="/temas" element={<ListaTema />} />
              <Route path="/posts" element={<ListaPostagem />} />

              <Route path="/formularioPostagem" element={<CadastroPost />} />
              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />

              <Route path="/deletarPostagem/:id" element={<DeletarPost />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
          
        <Footer />
      </ BrowserRouter >
    </Provider>
  )
}

export default App;
