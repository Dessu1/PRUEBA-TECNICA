import React, { useState, useEffect } from "react";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ingresoUsuario } from "../redux/usuarioDucks";

import bg from "../assets/img/bg.jpg";

const LoginArea = (props) => {
  const dispatch = useDispatch();
  const activo = useSelector((store) => store.usuario.activo);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (activo) {
      props.history.push("/home");
    }
  }, [activo]);

  return (
    <div id='login__area'>
      <div className='bg-circle'>
        <img src={bg} alt='background' />
      </div>
      <div className='description'>
        <div className='content'>
          <span>
            Aplicación <br /> OLSoftware
          </span>

          <span>Prueba práctica Front-end senior</span>
        </div>
      </div>

      <div className='card'>
        <span className='title'>Inicio de sesión</span>
        <div className='inputs-area'>
          <div className='input'>
            <input
              type='text'
              className='input-area'
              placeholder='Usuario'
              onChange={(e) => setEmail(e.target.value)}
            />
            <PersonIcon />
          </div>
          <div className='input'>
            <input
              type='password'
              className='input-area'
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon />
          </div>

          <button
            className='btn-login'
            onClick={() => dispatch(ingresoUsuario(email, password))}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginArea);
