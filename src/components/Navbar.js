import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showeSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: " #fff" }}>
        <div className="navbar">
          <Link className="menu-bars" to="#">
            <FaIcons.FaBars onClick={showeSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showeSidebar}>
            <li className="navbar-toggle">
              <Link className="menu-bars" to="#">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
