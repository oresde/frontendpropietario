import './App.css'

//importamos los componentes
import CompMostrarPropietarios from './Componentes/CompMostrarPropietarios';
import CompCrearPropietarios from './Componentes/CompCrearPropietarios';
import CompEditarPropietarios from './Componentes/CompEditarPropietarios';
// importamos Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CompFooter from './Componentes/Footer';

function App() {

  return (

    <div className='app'>

<header className='container'>


<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid"> <a className="navbar-brand" href="/login">LOGIN</a>

    <button
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNavAltMarkup"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className='nav-link'>INICIO</a></li>
        <li className="nav-item"><a className="nav-link" href="/propietarios">Propietarios</a></li>
      </ul>
    </div>
  </div>
</nav>
</header>



      <BrowserRouter>
        <Routes>
          <Route path='/propietarios' element={<CompMostrarPropietarios />} />
          <Route path='/propietario/agregar' element={<CompCrearPropietarios />} />
          <Route path='/propietario/editar/:id' element={<CompEditarPropietarios />} />
        </Routes>
      </BrowserRouter>
      <CompFooter/>
    </div>
  )
}

export default App;
