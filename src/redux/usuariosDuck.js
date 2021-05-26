import axios from "axios";

const DATA_INICIAL = {
  data: [],
};

// TYPES
const OBTENER_DATA = "OBTENER_DATA";
const BORRAR_USUARIO = "BORRAR_USUARIO";
const CREAR_USUARIO = "CREAR_USUARIO";

// Reducer
export default function usuariosReducer(state = DATA_INICIAL, action) {
  switch (action.type) {
    case OBTENER_DATA:
      return { ...state, ...action.payload };
    case BORRAR_USUARIO:
      const newData = [...state.data];
      newData.map((item) => {
        if (parseInt(item.id) === parseInt(action.payload)) {
          const index = newData.indexOf(item);
          newData.splice(index, 1);
        }
      });
      return { ...state, data: newData };

    case CREAR_USUARIO:
      const newArray = [...state.data];
      newArray.push(action.payload);

      return { ...state, data: newArray };
    default:
      return state;
  }
}

// Acciones
export const obtenerUsuarios = () => async (dispatch) => {
  if (localStorage.getItem("list-usuarios")) {
    dispatch({
      type: OBTENER_DATA,
      payload: JSON.parse(localStorage.getItem("list-usuarios")),
    });
  }

  try {
    const res = await axios.get(
      "https://mocki.io/v1/baaa4e5e-c82c-4944-8a50-5a67b148d01c"
    );

    const result = await res.data;

    dispatch({
      type: OBTENER_DATA,
      payload: result,
    });

    localStorage.setItem("list-usuarios", JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsuario = (id) => (dispatch) => {
  dispatch({
    type: BORRAR_USUARIO,
    payload: id,
  });
};

export const crearUsuario = (data) => (dispatch) => {
  dispatch({
    type: CREAR_USUARIO,
    payload: data,
  });
};
