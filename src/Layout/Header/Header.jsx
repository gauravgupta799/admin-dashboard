import React, { useEffect} from 'react'
import logo from "../../assets/logos/logo.svg";
import {Link} from "react-router-dom";


function Header(){
  
  useEffect(() =>{
    window.addEventListener("scroll", isStickyHeader);
    return ()=>{
      window.removeEventListener('scroll', isStickyHeader)
    }
  })

  const isStickyHeader =()=>{
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop > 10 ?
     (header && header.classList.add('is-sticky')) :
     (header && header.classList.remove('is-sticky'));
  }
  return (
    <header className='header'>
      <div className="page-container">
        <div className="header__container">
          <div className="header__left">
            <Link to="/">
              <div className="logo__wrapper">
                <img src={logo} alt=""  className="logo__img"/>
                <span className="logo__brand">MATERIO</span>
              </div>
            </Link>
          </div>
          <div className="header__right">
            <ul className="header__menu">
              <li className="header__list flex">
                <button className="btn action__btn">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      fontSize="1.5rem"
                      className="iconify iconify--mdi"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className="header__list">
                <div className="profile__wrapper">
                  <img src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-2/images/avatars/1.png" alt="" className='profile__img'/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;





  // {/* <div className="header__left">
  //       <div className="search__wrapper">
  //         <input 
  //           type="text"
  //           placeholder='Search'
  //           name="text"
  //           className="search__input"
  //           />
  //       </div>
  //     </div> */}