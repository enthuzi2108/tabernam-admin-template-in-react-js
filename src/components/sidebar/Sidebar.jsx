/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  // MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  // MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth0();

  const handleLogout = () => {
    // Perform logout logic here if needed
    // Redirect to the login page
    logout({ logoutParams: { returnTo: window.location.origin } })
  };
  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (location.pathname === '/login') {
    return null; 
  }

  if (location.pathname === '/register') {
    return null; 
  }
  if (location.pathname === '/') {
    return null; 
  }


  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">Covid19 Analysis</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">

          {/* <li className="menu-item">
            <Link to="/" className={location.pathname === "/" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Home</span>
              </Link>
            </li> */}
            <li className="menu-item">
              {/* <button
                className="sidebar-open-btn"
                type="button"
                onClick={openSidebar}
              >
                <MdOutlineMenu size={24} />
              </button> */}
            <Link to="/dashboard" className={location.pathname === "/dashboard" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
            <Link to="/table" className={location.pathname === "/table" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Analytics</span>
              </Link>
            </li>
            <li className="menu-item">
            <Link to="/profile" className={location.pathname === "/profile" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlinePeople size={20} />
                </span>
                <span className="menu-link-text">Profile</span>
              </Link>
            </li>
            
            <li className="menu-item">
            <Link to="/resource" className={location.pathname === "/resource" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Resources</span>
              </Link>
            </li>
           
            <li className="menu-item">
            <Link to="/faq" className={location.pathname === "/faq" ? "menu-link active" : "menu-link"}>
                <span className="menu-link-icon">
                  <MdOutlineMessage size={18} />
                </span>
                <span className="menu-link-text">FAQ</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            {/* <li className="menu-item">
              <Link to="/setting" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li> */}
            <li className="menu-item">
              <button className="menu-link" onClick={handleLogout}>
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
