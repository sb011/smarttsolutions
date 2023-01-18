import React from 'react';
import "../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>Smart Solutions</h3>
                <p>Simplify the Solution Smartly</p>
                <h2>6A,Santpura, Kaprthala(144601).<br></br>
                Mobile No. +91 9464794809 / +91 6280843245 <br></br>
                Email: <a href="mailto:=smarttsolutions85@gmail.com">smarttsolutions85@gmail.com</a><br></br>
                Website: www.smarttsolutions.in
                </h2>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2021 <a href="/">smartsolutions</a></p>
            </div>
        </footer>
    )
}

export default Footer