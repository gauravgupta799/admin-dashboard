import React,{useState, useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

function SideMenu() {
  const [isActive, setIsActive] = useState(false);
  const pathname = useLocation().pathname;

  return (
    <aside className="aside">
      <nav className="aside__nav">
        <ul className="aside__menu">
          <li className={`${pathname === '/' ? "aside__list active" :"aside__list"}`}>
            <Link to="/" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>Dashboard</div>
            </Link>      
          </li>   
          <li className={`${pathname === '/user' ? "aside__list active" :"aside__list"}`}>
            <Link to="/user" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>User</div>
            </Link>      
          </li>  
          <li className={`${pathname === '/accesscontrol' ? "aside__list active" :"aside__list"}`}>
            <Link to="/accesscontrol" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>Access Control</div>
            </Link>      
          </li>      
          <li  className={`${pathname === '/charts' ? "aside__list active" :"aside__list"}`}>
            <Link to="/charts" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>Charts</div>
            </Link>      
          </li>    
          <li  className={`${pathname === '/invoice' ? "aside__list active" :"aside__list"}`}>
            <Link to="/invoice" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>Invoice</div>
            </Link>      
          </li>    
          <li  className={`${pathname === '/calender' ? "aside__list active" :"aside__list"}`}>
            <Link to="/calender" className='aside__link'>
              <div className="aside__icon">
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
                    d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"
                  />
                </svg>
              </div>
              <div className='aside__link-title'>Calender</div>
            </Link>      
          </li>      
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu
