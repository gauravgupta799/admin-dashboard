import React from 'react';
import logo from "../../assets/logos/logo.svg";

function SideMenu() {
  return (
    <aside className="aside">
      <div className="logo__wrapper">
        <img src={logo} alt=""  className="logo__img"/>
        <span>MATERIO</span>
      </div>
      <div className="aside__nav">

      </div>
    </aside>
  )
}

export default SideMenu
