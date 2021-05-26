import React, { useEffect, useState } from "react";
import GroupIcon from "@material-ui/icons/Group";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import LastPageIcon from "@material-ui/icons/LastPage";
import CreateUser from "./CreateUser";

import { useDispatch, useSelector } from "react-redux";

import { obtenerUsuarios, deleteUsuario } from "../redux/usuariosDuck";
import ReactDOM from "react-dom";

const Usuarios = ({ data }) => {
  const dispatch = useDispatch();

  const usuarios = useSelector((store) => store.usuarios.data);

  const [showCreateUser, setShowCreateUser] = useState(false);

  const deleteUser = (id) => {
    dispatch(deleteUsuario(id));
  };

  const ponerFilas = () => {
    return usuarios
      .filter((item) => {
        if (data.nombres === undefined) {
          return item;
        }
        if (item.nombres.toLowerCase().includes(data.nombres.toLowerCase())) {
          return item;
        }
      })
      .filter((item) => {
        if (data.apellidos === undefined) {
          return item;
        } else if (
          item.apellidos.toLowerCase().includes(data.apellidos.toLowerCase())
        ) {
          return item;
        }
      })
      .filter((item) => {
        if (data.rol === undefined) {
          return item;
        }
        if (item.rol.toLowerCase().includes(data.rol.toLowerCase())) {
          return item;
        }
      })
      .filter((item) => {
        if (data.estado === undefined || data.estado === "") {
          return item;
        }
        if (item.estado === true && data.estado === "activo") {
          return item.estado;
        }
        if (item.estado === false && data.estado === "inactivo") {
          return item.estado;
        }
      })
      .filter((item) => {
        if (data.telefono === undefined || data.telefono === "") {
          return item;
        }
        if (parseInt(item.telefono) === parseInt(data.telefono)) {
          return item;
        }
      })
      .filter((item) => {
        if (data.email === undefined) {
          return item;
        }
        if (item.email.toLowerCase().includes(data.email.toLowerCase())) {
          return item;
        }
      })
      .map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.nombres}</td>
            <td>{item.apellidos}</td>
            <td>{item.id}</td>
            <td>{item.rol}</td>
            <td>{item.estado ? "Activo" : "Inactivo"}</td>
            <td>{item.telefono}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => window.alert("Edición no implementada")}>
                <EditIcon />
              </button>
              <button onClick={() => deleteUser(item.id)}>
                <DeleteIcon />
              </button>
            </td>
          </tr>
        );
      });
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerUsuarios());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div id='usuarios'>
      <div className='content'>
        <div className='title'>
          <div className='desc'>
            <GroupIcon />
            <span>Usuarios existentes</span>
          </div>

          <button
            className='btn-create'
            onClick={() => setShowCreateUser(true)}
          >
            Crear
          </button>
        </div>
        <div className='table'>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Identificación (C.C)</th>
              <th>Rol asociado</th>
              <th>Estado</th>
              <th>Teléfono</th>
              <th>Correo electrónico</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>{ponerFilas()}</tbody>
        </div>

        <div className='next'>
          <div className='content'>
            <FirstPageIcon />
            <NavigateBeforeIcon />
            <NavigateNextIcon />
            <LastPageIcon />
          </div>
        </div>
      </div>
      {showCreateUser
        ? ReactDOM.createPortal(
            <CreateUser setShowCreateUser={setShowCreateUser} />,
            document.getElementById("modal")
          )
        : null}
    </div>
  );
};

export default Usuarios;
