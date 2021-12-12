import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempRect = e.target.getBoundingClientRect();
    const center = (tempRect.right + tempRect.left) / 2 + "px";
    const bottom = tempRect.bottom - 3 + "px";
    openSubmenu(page, { center, bottom });
  };

  const handleMouseOver = (e) => {
    let navClass = e.target.classList;
    if (!navClass.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav">
      <div className="nav-center" onMouseOver={handleMouseOver}>
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button onClick={openSidebar} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn"> Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
