import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { useSelector } from "react-redux";

const App = () => {
  const userCurrent = useSelector((store) => store.usuario.user);

  const RutaPrivada = ({ component, path, ...rest }) => {
    if (userCurrent) {
      return <Route component={component} path={path} {...rest} />;
    } else {
      return <Redirect to='/login' {...rest} />;
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <RutaPrivada exact path='/home' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
