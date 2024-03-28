/* eslint-disable no-unused-vars */
import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
  import { useLocation } from "react-router-dom";
  import { useAuth0 } from "@auth0/auth0-react";
  import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useTheme } from "../../../context/ThemeContext"; 


const AreaTop = () => {
  const { openSidebar } = useContext(SidebarContext);
    const location = useLocation();
    const { user, isAuthenticated } = useAuth0();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate()
    const { theme } = useTheme();
  
  const getPageHeading = () => {
    const path = location.pathname.toLowerCase();
    const segments = path.split('/');
    const lastSegment = segments[segments.length - 1];

    const pageHeadings = {
      faq: 'FAQ',
      resource: 'Resource',
      profile: 'Profile',
      // login: 'Login',
      // register:'Sign Up',
      dashboard: 'Dashboard',
      table:'Analytics'
    };
  
    
    return pageHeadings[lastSegment] || pageHeadings.default;
  };

  const shouldRender = !['/login', '/register'].includes(location.pathname);

  if (!shouldRender) {
    return null; // Don't render if on login or register page
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleProfileClick = () => {
   navigate("/profile");
  };
  
  return (
    <ThemeProvider theme={{ mode: theme }}>
    <section className="content-area-top">
      <div className="area-top-l">
      <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">{getPageHeading()}</h2>
      </div>
      {isAuthenticated && (
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginRight: '20px',
          color: theme === 'dark' ? 'white' : 'black', // Adjust color based on theme
        }}
      >
        <h4 style={{ margin: '0' }}>{user.name}</h4>
        <img
          src={user.picture}
          alt={user.name}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            cursor: 'pointer', // Add cursor pointer
          }}
          onClick={handleProfileClick}
        />
      </div>
      )}
    </section>
    </ThemeProvider>
  );
};

export default AreaTop;
