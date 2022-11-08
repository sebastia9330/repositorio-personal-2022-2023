import React from 'react'
import VerProducto from './VerProducto'
import AgregarProducto from './AgregarProducto'
import EditarProductos from './EditarProductos'
import EliminarProducto from './EliminarProductos'

function ListaProductos(){
    return(
    <div>
    <h2>Lista de  productos</h2>
    <VerProducto/>
    <AgregarProducto/>
    <EditarProductos/>
    <EliminarProducto/>
    </div>
    )
}

export default ListaProductos