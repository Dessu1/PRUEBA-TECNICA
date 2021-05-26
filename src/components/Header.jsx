import React, { useState } from "react";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";

import { cerrarSesion } from "../redux/usuarioDucks";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const [currentHidden, setCurrentHidden] = useState(false);

  const ocultarIcons = () => {
    setCurrentHidden(!currentHidden);

    props.setHidden(currentHidden);
  };

  const salir = () => {
    dispatch(cerrarSesion());
    props.history.push("/login");
  };

  return (
    <div id='header'>
      <div className='title'>
        <button onClick={() => ocultarIcons()}>
          <MenuIcon />
        </button>
        <span>Prueba Front-End</span>
      </div>

      <div className='logOut'>
        <AccountCircleIcon />
        <span>Brian Stiven Alvarado</span>

        <button onClick={() => salir()}>
          <ExitToAppIcon />
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
