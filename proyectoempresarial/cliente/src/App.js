import logo from './logo.svg';
import './App.css';
import ListaProductos from './ListaProductos'
import EditarProductos from './EditarProductos';
import AgregarProductos from './AgregarProductos';
import VerProducto from './VerProducto';
import EliminarProductos from './EliminarProductos';
/*libreria para manejo de rutas*/
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <h1>Aplicacion web de productos</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListaProductos/>} exact></Route>
            <Route path='/agregarprodu' element={<AgregarProductos/>} exact></Route>
            <Route path='/editarprodu' element={<EditarProductos/>} exact></Route>
            <Route path='/eliminarprodu' element={<EliminarProductos/>} exact></Route>
          </Routes>
        </BrowserRouter>
        <ListaProductos/>
      
        <img src={logo} className="App-logo" alt="logo"/>
    </div>
  );
}

export default App;
