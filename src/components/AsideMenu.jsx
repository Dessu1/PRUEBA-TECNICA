import React from "react";
import MapIcon from "@material-ui/icons/Map";
import ListIcon from "@material-ui/icons/List";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import ReceiptIcon from "@material-ui/icons/Receipt";

import IconsNav from "../components/general/IconsNav";

const AsideMenu = (props) => {
  return (
    <div id='aside-menu'>
      <div className='container'>
        <div className='circle'></div>
        <span className={props.hidden ? "hidden" : "show"}>OLSoftware</span>
      </div>

      <IconsNav text='Programación' Icon={MapIcon} hidden={props.hidden} />
      <IconsNav
        text='Gestión de operaciones'
        Icon={ListIcon}
        hidden={props.hidden}
      />
      <IconsNav text='Perfiles' Icon={ClearAllIcon} hidden={props.hidden} />
      <IconsNav text='Reportes' Icon={ReceiptIcon} hidden={props.hidden} />
    </div>
  );
};

export default AsideMenu;
