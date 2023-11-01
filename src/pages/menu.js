import React from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import menu from "../menu.json";
import menuStyle from "../css/menu.module.css";

const Menu = () => {
  console.log(menu);
  return (
    <div>
      <Header />
      <table className={menuStyle.ingredient} cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Availability</th>
            <th>DeliveryOption</th>
            <th>Cook</th>
          </tr>
        </thead>
        <tbody>
          {menu?.map((menuItem, index) => (
            <tr key={index}>
              <td>{menuItem.id}</td>
              <td>{menuItem.title}</td>
              <td>{menuItem.price}</td>
              <td>{menuItem.description}</td>
              <td>{menuItem.availability}</td>
              <td>{menuItem.deliveryOption.toString()}</td>
              <td>{menuItem.cook}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Menu;
