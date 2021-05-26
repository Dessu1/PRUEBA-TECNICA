import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Importacion de todos los reducer
import usuarioReducer from "./usuarioDucks";
import usuariosReducer from "./usuariosDuck";

const rootReducer = combineReducers({
  usuario: usuarioReducer,
  usuarios: usuariosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
