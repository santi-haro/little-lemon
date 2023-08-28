import { useState } from "react";
import logo from "../images/Logo .svg"

function Nav(){
    const[menuOpen, setMenuOpen] = useState(false);
    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return(
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="logo"></img>
            </a>
            <div className="menu-icon" onClick={toogleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                     <a href="/">Home</a>
                </li>
                <li>
                     <a href="/products">About</a>
                </li>
                <li>
                    <a href="/about-us">Services</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/booking">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;