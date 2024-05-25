import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = 'http://localhost:5000/api/propietarios/';
const URL = 'https://backendpropietario.onrender.com/api/propietarios';

const CompCrearPropietarios = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [area, setArea] = useState('');
    const [valor, setValor] = useState('');
    const navigate = useNavigate();

    // creamos la funcion de guardar 

    const guardarPropietarios = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombres: nombres, apellidos: apellidos, apartamento: apartamento,
            area: area, valor: valor,
        })
        navigate('/propietarios')
    }
    return (
        <div>
            <h3>Formulario Guardar Propietarios</h3>
            <form onSubmit={guardarPropietarios} >

                <div className="mb-3">
                    <label className="form-label">Nombres Propietarios </label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellidos Propietarios </label>
                    <input value={apellidos} onChange={(e) => setApellidos(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apartamento</label>
                    <input value={apartamento} onChange={(e) => setApartamento(e.target.value)}
                        type="number" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Area</label>
                    <input value={area} onChange={(e) => setArea(e.target.value)}
                        type="number" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Valor cuota admon</label>
                    <input value={valor} onChange={(e) => setValor(e.target.value)}
                        type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary"><i className="fa-solid fa-floppy-disk"></i></button>

            </form>
        </div>
    )
}

export default CompCrearPropietarios;