import logo from './logo.svg';
import './App.css';
import ListaProductos from './ListaProductos'
import EditarProductos from './EditarProductos';
import AgregarProductos from './AgregarProductos';
import VerProducto from './VerProducto';
import EliminarProductos from './EliminarProductos';


function App() {
  return (
    <div className="App">
        <h1>Aplicacion web de productos</h1>
        <ListaProductos/>
        <EditarProductos/>
        <AgregarProductos/>
        <VerProducto/>
        <EliminarProductos/>
        <img src={logo} className="App-logo" alt="logo"/>
    </div>
  );
}

export default App;
