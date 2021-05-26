import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

import { crearUsuario } from "../redux/usuariosDuck";
import { useDispatch } from "react-redux";

const CreateUser = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [rol, setRol] = useState("");
  const [estado, setEstado] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const createUser = () => {
    if (
      name.length === 0 ||
      lastName.length === 0 ||
      id.length === 0 ||
      rol.length === 0 ||
      estado.length === 0 ||
      password.length === 0 ||
      phone.length === 0 ||
      email.length === 0
    ) {
      setError("Todos los campos deben estar llenos");
    } else {
      let data = {
        nombres: name,
        apellidos: lastName,
        id: parseInt(id),
        rol: rol,
        estado: estado.toLocaleLowerCase() === "activo" ? true : false,
        password: password,
        telefono: parseInt(phone),
        email: email,
      };

      dispatch(crearUsuario(data));

      setName("");
      setLastName("");
      setId("");
      setRol("");
      setEstado("");
      setPassword("");
      setPhone("");
      setEmail("");
      setError("");
    }
  };

  const cancelCreate = (e) => {
    e.preventDefault();
    setName("");
    setLastName("");
    setId("");
    setRol("");
    setEstado("");
    setPassword("");
    setPhone("");
    setEmail("");
    setError("");
  };

  return (
    <div id='create-user'>
      <div className='content'>
        <div className='top'>
          <span>Agregar nuevo usuario</span>

          <button onClick={() => props.setShowCreateUser(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className='inputs'>
          <div className='input-content'>
            <label>Nombres</label>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className='input-content'>
            <label>Apellidos (C.C)</label>
            <input
              type='text'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className='input-content'>
            <label>Identificación (C.C)</label>
            <input
              type='text'
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </div>
          <div className='input-content'>
            <label>Rol asociado</label>
            <input
              type='text'
              onChange={(e) => setRol(e.target.value)}
              value={rol}
            />
          </div>
          <div className='input-content'>
            <label>Estado</label>
            <input
              type='text'
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
              placeholder='activo o inactivo'
            />
          </div>
          <div className='input-content'>
            <label>Contraseña</label>
            <input
              type='text'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='input-content'>
            <label>Telefono</label>
            <input
              type='text'
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className='input-content'>
            <label>Correo electronico</label>
            <input
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>

        {error.length > 0 ? <p className='error-message'>{error}</p> : null}

        <div className='buttons'>
          <button className='btn-filter' onClick={(e) => createUser(e)}>
            Aceptar
          </button>
          <button className='btn-clear' onClick={(e) => cancelCreate(e)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
