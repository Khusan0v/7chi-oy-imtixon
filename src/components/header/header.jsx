import React from "react";
import styles from "./header.module.scss";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Info from "./../info/info";
import GameGeek from "/GameGeek.svg";
import { useSelector } from "react-redux";


function Header() {
  const cardCount = useSelector((state) => state.cart.items.length);
  
  return (
    <div className={styles.headerContent}>
      <Info />
      <div className={styles.bcColor}>
        <header>
          <div>
            <NavLink to="/">
              <img src={GameGeek} alt="GameGeek" />
            </NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="#">Categories</NavLink>
              </li>
              <li>
                <NavLink to="#">Brands</NavLink>
              </li>
              <li>
                <NavLink to="#">What’s new</NavLink>
              </li>
              <li>
                <NavLink to="#">Sales</NavLink>
              </li>
              <li>
                <NavLink to="#">Help</NavLink>
              </li>
              <li>
                <NavLink to="#">About</NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.card}>
            <NavLink to="#">
              <FiSearch />
            </NavLink>
            <NavLink to="#">
              <FiUser />
            </NavLink>
            <NavLink to="/cart">
              <FiShoppingCart />
              {cardCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                  }}
                >
                  {cardCount}
                </span>
              )}
            </NavLink>
          </div>
        </header>
      </div>
      <main></main>
    </div>
  );
}


export default Header;
