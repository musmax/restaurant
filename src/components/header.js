import React from "react";
import headerStyle from "../css/header.module.css";
const Header = () => {
  return (
    <div className={headerStyle.container}>
      <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png" alt="logo" className={headerStyle.containerImg}/>
      <ul className={headerStyle.navigation}>
        <li>Home</li>
        <li>Contact</li>
        <li>Menu</li>
        <li>Recruit</li>
      </ul>
    </div>
  );
};

export default Header;
