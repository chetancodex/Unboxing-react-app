import React from "react";
import './header.css'
import Icon from'../icons/bell'
import Left from '../icons/left'
import Down from '../icons/down'
const Header = () => {
    return(
    <header className="header">
        <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
</style>
    
    <h1><Left  style={{ fontSize : "25px"}}/> &nbsp;   Product Information</h1>
    <nav>
      <ul>
        <li className="firstitem"><div className="datebell">
            <a href="#home" className="date">08 Febuary, Thursday</a>&nbsp;&nbsp;&nbsp;
        <Icon className="bell-icon" />
        <span className="notification-dot"></span></div></li>
        <li> <div className="profile">
            <div className="profile-info">
              <span className="name">Pia&nbsp;Yadav</span>
              <span className="expertise-level">Expert</span>
            </div><div className="profile-circle"></div>
            <Down style={{color:"#F5F5F5"}}/></div>
            
            </li>
            
      </ul>
    </nav>
  </header>
);
}

export default Header;