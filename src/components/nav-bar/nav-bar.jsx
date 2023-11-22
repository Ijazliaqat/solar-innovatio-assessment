import React from "react";
import Logo from "../../assets/header-logo.png";
import CallSVG from "../../assets/phone-icon.svg";
import EmailSVG from "../../assets/email-icon.svg";
import "./nav-bar.css";
import { NavBarData } from "./nav-bar-dummy-data";
import { useState } from "react";

const NavBar = () => {
    const [navItem, setNavItem] = useState("Home");
    return (
        <>
            <header className="header">
                <div className="top_header container-fluid container-lg pt-3 d-none d-lg-block">
                    <div className="row d-flex align-items-center ">
                        <div className="col-md-5 ">
                            <a className="navbar-brand" href="#">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="col-md-7 d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img className="mx-3" src={CallSVG} alt="phone-icon" />
                                <span className="font-poppins fs-16 fw-400 primary-text-color">
                                    0203 519 4420
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <img className="mx-3" src={EmailSVG} alt="phone-icon" />
                                <span className="font-poppins fs-16 fw-400 primary-text-color">
                                    info@solarinnovatio.com
                                </span>
                            </div>
                            <button
                                type="button"
                                className="btn primary-bg-color fs-16 fw-500 text-white font-inter"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="top_header_divider d-none d-lg-block" />
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid container-lg">
                        <a className="navbar-brand d-block d-lg-none" href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto align-items-center justify-content-between w-100  mb-lg-0">
                                {NavBarData.map((item) => {
                                    return (
                                        <>
                                            <li key={item.id} className="nav-item">
                                                <a
                                                    // href={item.href}
                                                    className={`navbar-item nav-link py-0 font-poppins fs-18 fw-400 primary-text-color ${navItem === item.navItem ? "nav-item-color" : ""
                                                        }`}
                                                    aria-current="page"
                                                    onClick={(e) => {
                                                        // e.preventDefault()
                                                        setNavItem(item.navItem)
                                                    }}
                                                >
                                                    {item.navItem}
                                                </a>
                                            </li>
                                        </>
                                    );
                                })}
                                {/* <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">Chi Siamo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">S.I.R.E</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">SIRE Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">Why SIRE?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">SIRE Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link py-0 font-poppins fs-18 fw-400 primary-text-color" href="#">How it Works?</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
