import React, {useRef} from "componennt Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";
import 

return (
  <userContext.Provider value={"สมชาย"}>
    <div className="App">
      <Header />
      <Content />
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice} บาท</h3>
      </div>
      <div>
        <img src="case.jpg" alt="case" width="15%" />
        <br />
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >

export function Layout() {
  return (
  <nav className="bg-dark p-2 mb-3 text-center">
    <NavLink to="/" className="link px-2" style={({isActive}) => {
      return {
        textDecoration : isActive ? "none" : "underline",
      };
    }}>Main</NavLink>
    <NavLink to="/product" className="link px-2" style={({isActive}) => {
      return {
        textDecoration : isActive ? "none" : "underline",
      };
    }}>Product</NavLink>
    <NavLink to="/contact" className="link px-2" style={({isActive}) => {
      return {
        textDecoration : isActive ? "none" : "underline",
      };
    }}>Contact Us</NavLink>
  </nav>
  );
} 

