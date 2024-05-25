import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//const URL = 'http://localhost:5000/api/propietarios/';
const URL = 'https://backendpropietario.onrender.com/api/propietarios';

const CompEditarPropietarios = () => {

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [apartamento, setApartamento] = useState('');
    const [area, setArea] = useState('');
    const [valor, setValor] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    // funcion actualizar 

    const editarPropietarios = async (e) => {
        e.preventDefault();
        await axios.patch(`${URL}${id}`, {
            nombres: nombres,
            apellidos: apellidos,
            apartamento: apartamento,
            area: area,
            valor: valor,
        })
        navigate('/propietarios');
    }
    useEffect(() => {
        getclientesID()
    }, []);




    const getclientesID = async () => {
        const resul = await axios.get(`${URL}${id}`,)
        setNombres(resul.data.nombres)
        setApellidos(resul.data.apellidos)
        setApartamento(resul.data.apartamento)
        setArea(resul.data.area)
        setValor(resul.data.valor)

    }

  return(
<div>
         <h3>Formulario Editar Propietarios</h3>
            <form onSubmit={editarPropietarios} >

                <div className="mb-3">
                    <label className="form-label">Nombres Propietario </label>
                    <input value={nombres} onChange={(e) => setNombres(e.target.value)}
                        type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Apellidos Propietario </label>
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
                        type="text" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Valor cuota admon</label>
                    <input value={valor} onChange={(e) => setValor(e.target.value)}
                        type="number" className="form-control" />
                </div>

                <button type="submit" className="btn btn-success btn-lg"><i className="fa-regular fa-floppy-disk"></i></button>
            </form>
</div>
  )

}

export default CompEditarPropietarios;