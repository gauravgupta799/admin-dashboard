import React from 'react';
import {profileNavItems} from "../../data/data";
import {Link} from "react-router-dom"

function ProfilePopUp() {
  return (
    <div className='profile'>
        <div className="profile__container">
            <div className="profile__top">
                <img src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-2/images/avatars/1.png" alt="" className='profile__img'/>
                <div className="profile__titleWrapper">
                    <div className="user__name">John Doe</div>
                    <div className="user__type">Admin</div>
                </div>
            </div>
            <hr />
            <div className="profile__bottom">
                <ul className="profile__menu">
                {profileNavItems.map((navItem,index)=>{
                    const {id, path, name, icon} = navItem;
                        return (            
                            <li className="profile__nav-item" key={index}>
                                <Link to={`${path}`} className="profile__navLink">
                                    <div className="profile__navIcon">{icon}</div>
                                    <p>{name}</p>
                                </Link>
                            </li>
                        )
                    })
                }                  
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default ProfilePopUp;
