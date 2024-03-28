/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState,useContext } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import { useStateManager } from "../../../dataProvider/stateManager";
import { Modal } from "@mui/material";

const AreaTableAction = ({rowData}) => {

  const { theme } = useContext(ThemeContext);
  const buttonColor = theme === "dark" ? "#ffffff" : "#000000";
  const modalBackgroundColor = theme === "dark" ? "#333333" : "#ffffff";
  const modalTextColor = theme === "dark" ? "#ffffff" : "#000000";
  const [showDropdown, setShowDropdown] = useState(false);
  const { countriesData } = useStateManager();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
       <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleOpenModal}
        style={{ color: buttonColor }}
      >
        <HiDotsHorizontal size={18} />
      </button>
      <Modal open={showModal} onClose={handleCloseModal}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: modalBackgroundColor,
            color: modalTextColor, padding: "20px", borderRadius: "8px" }}>
          <h3>{rowData.country}</h3>
          <img src={rowData.countryInfo.flag} alt={rowData.country + " flag"} style={{ width: "100%", height: "auto" }} />
          <p>Total Cases: {rowData.cases}</p>
          <p>Total Deaths: {rowData.deaths}</p>
          <p>Total Recovered: {rowData.recovered}</p>
          <p>Total Tested: {rowData.tests}</p>
          {/* Add other country data you want to display */}
        </div>
      </Modal>
    </>
  );
};

export default AreaTableAction;
