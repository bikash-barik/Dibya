import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {


  return (
    <header className="header">
      <h1>{title} </h1>
     <button  style={{ backgroundColor: "green"}} className='btn'  onClick={onAdd}>{showAdd ? "Add" : "Close"}</button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//css js
// const headerStyle = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header;
