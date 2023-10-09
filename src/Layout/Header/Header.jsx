import React, {useState, useEffect} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineBell} from "react-icons/ai"
import ProfilePopUp from '../../Components/ProfilePopUp/ProfilePopUp';


function Header({isSideMenuOpen, setIsSideMenuOpen}){
  const [isScroll, setIsScroll] = useState(false);
  const [isProfileMunuOpen, setIsProfileMunuOpen] = useState(false);

  useEffect(() =>{
    window.addEventListener("scroll", isStickyHeader);
    return ()=>{
      window.removeEventListener('scroll', isStickyHeader)
    }
  })

  const isStickyHeader =()=>{
    const scrollTop = window.scrollY;
    scrollTop > 10 ? setIsScroll(true) : setIsScroll(false);
  }

  const toggleSideMenu = ()=> setIsSideMenuOpen(!isSideMenuOpen);

  const toggleProfileMenu = ()=>{
    setIsProfileMunuOpen(!isProfileMunuOpen);
  }

  return (
    <header className={isScroll ? "header header--sticky" : "header"}>
      <div className="page-container">
        <div className="header__container">
          <div className="header__left">
            <div className="hamburger__wrapper" onClick={toggleSideMenu}>
              <span>
                <GiHamburgerMenu color="#fff" style={{fontSize:"30px"}}/>
              </span>
            </div>  
          </div>
          <div className="header__right">
            <ul className="header__menu">
              <li className="header__list flex">
                <button className="btn action__btn">
                  <span><AiOutlineBell style={{width:"34px"}}/></span>
                </button>
              </li>
              <li className="header__list">
                <div className="profile__wrapper" onClick={toggleProfileMenu}>
                  <img src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-2/images/avatars/1.png" alt="" className='profile__img'/>
                </div>
                {
                  isProfileMunuOpen &&  <ProfilePopUp/>
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={isSideMenuOpen ? "overlay overlay--active" :"overlay"}
          onClick={toggleSideMenu}
          >
      </div>
    </header>
  )
}

export default Header;
