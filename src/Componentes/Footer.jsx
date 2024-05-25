import React from "react";
import redes from "../imagenes/redes.png"


const CompFooter = () => {

return(


<div>
<div className="card-body">
    <h4 className="card-titel">Direccion Carrera 62 # 99-80</h4>
    <p className="card-text">Correo: oro@gmail.com Tel 360630456</p>
    <img  src={redes} className="App-logo1" alt="logo"/>
</div>
<div className="card-footer text-muted">Horario Lunes-Viernes 7:00am-4:00pm</div>
</div>
)
}


export default CompFooter;