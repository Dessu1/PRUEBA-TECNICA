//  CONSTANTES
const dataInicial = {
  usuarios: [
    {
      id: 1144107087,
      nombres: "Brian stiven",
      apellidos: "Alvarado soto",
      estado: true,
      rol: "Administrador",
      telefono: 3218824429,
      email: "brian.stiven.alvarado21@gmail.com",
      password: "1234",
    },
    {
      id: 1144106087,
      nombres: "Andres",
      apellidos: "Castro perez",
      estado: false,
      rol: "Administrador",
      telefono: 3218434429,
      email: "example@gmail.com",
      password: "1234",
    },
  ],
  activo: false,
};

// TYPES
const LOADING = "LOADING";
const USUARIO_ERROR = "USUARIO_ERROR";
const USUARIO_EXITO = "USUARIO_EXITO";
const CERRAR_SESION = "CERRAR_SESION";

// REDUCER
export default function usuarioReducer(state = dataInicial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USUARIO_ERROR:
      return { ...dataInicial };
    case USUARIO_EXITO:
      return { ...state, activo: true, loading: false, user: action.payload };
    case CERRAR_SESION:
      return { ...dataInicial };
    default:
      return { ...state };
  }
}

// ACCIONES
/**
 *
 * @param {*} email Email obtenido desde el comoponente loginArea
 * @param {*} password  Password obtenida desde el componente loginArea
 * @returns
 */
export const ingresoUsuario = (email, password) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  dataInicial.usuarios.map((usuario) => {
    if (usuario.email === email && usuario.password === password) {
      dispatch({
        type: USUARIO_EXITO,
        payload: usuario,
      });

      localStorage.setItem(
        "usuario",
        JSON.stringify({
          id: usuario.id,
          email: usuario.email,
          name: usuario.nombres,
        })
      );
    }
  });
};
/**
 *
 * @Change - Modifica el estado global "activo"
 */
export const cerrarSesion = () => (dispatch) => {
  localStorage.removeItem("usuario");
  dispatch({
    type: CERRAR_SESION,
  });
};
