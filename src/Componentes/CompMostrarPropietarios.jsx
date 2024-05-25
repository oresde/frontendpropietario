import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = 'http://localhost:5000/api/propietarios/';
const URL = 'https://backendpropietario.onrender.com/api/propietarios/';

const CompMostrarPropietarios = () => {
    const [propietarios, setPropietarios] = useState([])

    useEffect(() => {
        getpropietarios()
    }, []);

    // funcion para mostrar los propietarios 
    const getpropietarios = async () => {
        const resul = await axios.get(URL)
        setPropietarios(resul.data);
    }
    // funcion eliminar propietarios
    const eliminarPropietarios = async (id) => {
        await axios.delete(`${URL}${id}`)
        getpropietarios();
    }
    return (
        <div className="container">
            <h3>Lista de propietarios</h3>
            <div className="row">
                <div className="col">
                    <Link to='/propietario/agregar' className="btn btn-success mt-2 mb-2">
                    <i className="fa-solid fa-user-plus"></i></Link>
                    <table className="table-responsive">
                    <table className="table">
                        <thead className="table-light">
                            <tr>
                                <th>Nombre Propietario</th>
                                <th>Apellidos Propietario</th>
                                <th>Apartamento</th>
                                <th>Area</th>
                                <th>Valor cuota admon</th>
                                <th>Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {propietarios.map((propietario, index) => (
                                <tr key={index}>
                                    <td>{propietario.nombres}</td>
                                    <td>{propietario.apellidos}</td>
                                    <td>{propietario.apartamento}</td>
                                    <td>{propietario.area}</td>
                                    <td>{propietario.valor}</td>
                                    <td>
                                        <Link to={`/propietario/editar/${propietario._id}`} className="btn btn-primary mt-2 mb-2">
                                            <i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={() => eliminarPropietarios(propietario._id)} className="btn btn-danger">
                                            <i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </table>
                </div>
            </div>
        </div >
    )
}


export default CompMostrarPropietarios;