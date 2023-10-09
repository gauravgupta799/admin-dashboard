import React,{useEffect} from 'react';
import logo from "../../assets/logos/logo.svg";
import {Link, useLocation} from "react-router-dom";
import {navLinkItems} from "../../data/data";

function SideMenu({isSideMenuOpen}) {
  const pathname = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector('body');
    if(body){
      body.style.overflow = isSideMenuOpen ? 'hidden': "auto"; 
    }
  },[isSideMenuOpen])

  return (
    <aside className={isSideMenuOpen ? "aside aside--menu-open" : "aside"}>
      <nav className="aside__nav">
        <div className="logo__container">
          <Link to="/">
            <div className="logo__wrapper">
              <img src={logo} alt=""  className="logo__img"/>
              <span className="logo__brand">MATERIO</span>
            </div>
          </Link>
        </div> 
        <ul className="aside__menu">
        {
          navLinkItems.map((navItem) => {
            const {id, path, name, icon} = navItem;
            return (
              <li className={`${pathname ===  path ? "aside__list active" :"aside__list"}`} key={id}>
                <Link to={`${path}`} className='aside__link'>
                  <div className="icon">
                    {icon}
                  </div>
                  <div className='aside__link-title'>{name}</div>
                </Link>      
               </li>  
            )
          })
        }
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu
