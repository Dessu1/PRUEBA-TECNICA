import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";

const Filter = (props) => {
  const [filterName, setFilterName] = useState("");
  const [filterLastname, setFilterLastname] = useState("");
  const [filterId, setFilterId] = useState("");
  const [filterRol, setFilterRol] = useState("");
  const [filterEstado, setFilterEstado] = useState("");
  const [filterPassword, setFilterPassword] = useState("");
  const [filterPhone, setFilterPhone] = useState("");
  const [filterEmail, setFilterEmail] = useState("");

  const filterData = (e) => {
    e.preventDefault();
    let data = {
      nombres: filterName,
      apellidos: filterLastname,
      id: filterId,
      rol: filterRol,
      estado: filterEstado,
      password: filterPassword,
      telefono: filterPhone,
      email: filterEmail,
    };

    props.setData(data);
  };

  const limpiar = (e) => {
    e.preventDefault();

    setFilterName("");
    setFilterLastname("");
    setFilterId("");
    setFilterRol("");
    setFilterEstado("");
    setFilterPassword("");
    setFilterPhone("");
    setFilterEmail("");
  };

  return (
    <div id='filter'>
      <div className='content'>
        <div className='title'>
          <PersonIcon />
          <span>Filtrar búsqueda</span>
        </div>

        <form className='form-group'>
          <div className='content-input'>
            <label>Nombres</label>
            <input
              type='text'
              onChange={(e) => setFilterName(e.target.value)}
              value={filterName}
            />
          </div>
          <div className='content-input'>
            <label>Apellidos</label>
            <input
              type='text'
              onChange={(e) => setFilterLastname(e.target.value)}
              value={filterLastname}
            />
          </div>
          <div className='content-input'>
            <label>Identificador (C.C)</label>
            <input
              type='text'
              onChange={(e) => setFilterId(e.target.value)}
              value={filterId}
            />
          </div>
          <div className='content-input'>
            <label>Rol asociado</label>
            <input
              type='text'
              onChange={(e) => setFilterRol(e.target.value)}
              value={filterRol}
            />
          </div>
          <div className='content-input'>
            <label>Estado</label>
            <input
              type='text'
              onChange={(e) => setFilterEstado(e.target.value)}
              value={filterEstado}
            />
          </div>
          <div className='content-input'>
            <label>Contraseña</label>
            <input
              type='password'
              onChange={(e) => setFilterPassword(e.target.value)}
              disabled={true}
              value={filterPassword}
            />
          </div>
          <div className='content-input'>
            <label>Teléfono</label>
            <input
              type='text'
              onChange={(e) => setFilterPhone(e.target.value)}
              value={filterPhone}
            />
          </div>
          <div className='content-input'>
            <label>Correo electrónico</label>
            <input
              type='text'
              onChange={(e) => setFilterEmail(e.target.value)}
              value={filterEmail}
            />
          </div>

          <div className='buttons'>
            <button
              className='btn-filter'
              type='button'
              onClick={(e) => filterData(e)}
            >
              Filtrar
            </button>
            <button
              className='btn-clear'
              type='button'
              onClick={(e) => limpiar(e)}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
