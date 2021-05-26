import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='notFound'>
      <Link to='/'>Pagina no encontrada</Link>
    </div>
  );
};

export default NotFound;
