import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { OwnerSidebarData } from "../sidebardata/OwnerSidebarData";
import { ManagerSidebarData } from "../sidebardata/ManagerSidebarData";
import { ChefSidebarData } from "../sidebardata/ChefSidebarData";
import { WaiterSidebarData } from "../sidebardata/WaiterSidebarData";
import { SupplierSidebarData } from "../sidebardata/SupplierSidebarData";
import { CustomerSidebarData } from "../sidebardata/CustomerSidebarData";
import { adminLogout } from "../../actions/adminActions";
import { customerLogout } from "../../actions/customerActions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const loggedin = sessionStorage["Loggedin"];
  const role = sessionStorage["role"];
  
  const dispatch = useDispatch();

  const customerSignin = useSelector((store) => store.customerSignin);
  const { response1 } = customerSignin;
  const adminSignin = useSelector((store) => store.adminSignin);
  const { response } = adminSignin;

  let customer = response1 ? true : false;
  let user;
  let show = false;

  if (adminSignin.loading === false && response) {
    user = adminSignin.response.role;
    show = true;
    customer = false;
  }

  if (role) {
    show = true;
  }

  const onLogout = () => {
    if (role === "CUSTOMER") {
      dispatch(customerLogout());
    } else {
      dispatch(adminLogout());
    }
    sessionStorage.clear(); // Clear sessionStorage on logout
  };

  const showSidebar = () => setSidebar(!sidebar);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${isScrolled ? "header-scrolled" : ""}`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
         {/* Sidebar Option - Based on user role */}
         {show && (
            <li>
              <button onClick={showSidebar} className="nav-link scrollto">
                <i className="fas fa-bars"></i>
              </button>
            </li>
          )}
            
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Restaurantly</a>
        </h1>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${isMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="/home#menu" onClick={closeMenu}>
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/home#specials" onClick={closeMenu}>
                Specials
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/home#events" onClick={closeMenu}>
                Events
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/home#chefs" onClick={closeMenu}>
                Chefs
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/home#gallery" onClick={closeMenu}>
                Gallery
              </a>
            </li>

            {/* Conditionally render Sign In/Sign Up dropdown or logout */}
            {!show ? (
              <li className="dropdown">
                <a href="#">
                  <span>Sign In / Sign Up</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/signin">Customer Sign In</a>
                  </li>
                  <li>
                    <a href="/signup">Customer Sign Up</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Admin</span> <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/admin/signin">Admin Sign In</a>
                      </li>
                      <li>
                        <a href="/admin/signup">Admin Sign Up</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            ) : (
              <li>
                <button className="nav-link scrollto" onClick={onLogout}>
                  Logout
                </button>
              </li>
            )}
            
            <li>
              <Link className="nav-link scrollto" to="/contactus" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${isMenuOpen ? "bi-x" : "bi-list"}`}
            onClick={toggleMenu}
          ></i>
        </nav>

        <a href="/home#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">
          Book a table
        </a>
      </div>
    </header>
  );
};

export default Header;
