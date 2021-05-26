import React, { useState } from "react";
import AsideMenu from "../components/AsideMenu";
import Filter from "../components/general/Filter";
import FooterPage from "../components/general/FooterPage";
import Header from "../components/Header";
import Usuarios from "../components/Usuarios";

const Home = () => {
  const [data, setData] = useState([]);

  const [hidden, setHidden] = useState(false);

  return (
    <div id={hidden ? "homeHiddenMenu" : "home"}>
      <Header setHidden={setHidden} />
      <AsideMenu hidden={hidden} />
      <Usuarios data={data} />
      <Filter setData={setData} />
      <FooterPage />
    </div>
  );
};

export default Home;
