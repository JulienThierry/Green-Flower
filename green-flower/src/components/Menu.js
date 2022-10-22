import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-logo">
                <img src="./logo.png" alt="logo Green Flower" />
                <h1>Green Flower</h1>
            </div>
            <div className="menu-nav">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/products">
                        <li>Nos produits</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>À propos de nous</li>
                    </NavLink>
                </ul>
            </div>
            <div className="menu-icons">
                <ul>
                    <NavLink to="/profile">
                        <li><i class="fa-solid fa-user"></i></li>
                    </NavLink>
                    <NavLink to="/cart">
                        <li><i class="fa-solid fa-cart-shopping"></i></li>
                    </NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Menu;