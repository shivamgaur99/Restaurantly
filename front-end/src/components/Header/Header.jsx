import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OwnerSidebarData } from "../sidebardata/OwnerSidebarData";
import { ManagerSidebarData } from "../sidebardata/ManagerSidebarData";
import { ChefSidebarData } from "../sidebardata/ChefSidebarData";
import { WaiterSidebarData } from "../sidebardata/WaiterSidebarData";
import { SupplierSidebarData } from "../sidebardata/SupplierSidebarData";
import { CustomerSidebarData } from "../sidebardata/CustomerSidebarData";
import { adminLogout } from "../../actions/adminActions";
import { customerLogout } from "../../actions/customerActions";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loggedin = sessionStorage.getItem("Loggedin");
  const role = sessionStorage.getItem("role");

  const dispatch = useDispatch();

  const customerSignin = useSelector((store) => store.customerSignin);
  const { response1 } = customerSignin;
  const adminSignin = useSelector((store) => store.adminSignin);
  const { response } = adminSignin;

  let user = adminSignin?.response?.role || null;
  let customer = customerSignin?.response1 || false;
  let show = !!role;

  if (adminSignin?.loading === false && response) {
    user = adminSignin.response.role;
    show = true;
    customer = false;
  }

  const onLogout = () => {
    if (role === "CUSTOMER") {
      dispatch(customerLogout());
    } else {
      dispatch(adminLogout());
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setIsScrolled(currentScrollPosition > 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (e) => {
    const dropdown = e.currentTarget.nextElementSibling;
    if (dropdown) {
      dropdown.classList.toggle("dropdown-active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSidebarData = () => {
    switch (role || user) {
      case "OWNER":
        return OwnerSidebarData;
      case "MANAGER":
        return ManagerSidebarData;
      case "CHEF":
        return ChefSidebarData;
      case "WAITER":
        return WaiterSidebarData;
      case "SUPPLIER":
        return SupplierSidebarData;
      case "CUSTOMER":
        return CustomerSidebarData;
      default:
        return [];
    }
  };

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
      {loggedin && (
        <Sidebar
          collapsed={!sidebarOpen}
          className="custom-sidebar"
          style={{
            position: "fixed",
            top: "120px",
            left: 0,
            zIndex: 999,
          }}
        >
          <Menu iconShape="square">
            <MenuItem
              onClick={toggleSidebar}
              icon={sidebarOpen ? <FaTimes /> : <FaBars />}
            >
              <Link to="/">Restaurantly</Link>
            </MenuItem>

            {getSidebarData().map((item, index) => (
              <MenuItem key={index} icon={item.icon} onClick={toggleSidebar}>
                <Link to={item.path}>{item.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      )}
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">Restaurantly</a>
        </h1>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${
            isMenuOpen ? "navbar-mobile" : ""
          }`}
        >
          <ul>
            <li>
              <Link
                className="nav-link scrollto"
                to="/home"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="/home#menu"
                onClick={closeMenu}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="/home#specials"
                onClick={closeMenu}
              >
                Specials
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="/home#events"
                onClick={closeMenu}
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="/home#chefs"
                onClick={closeMenu}
              >
                Chefs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="/home#gallery"
                onClick={closeMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                to="/contactus"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            {!show ? (
              <li className="dropdown">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(e);
                  }}
                >
                  <span>Sign In / Sign Up</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/signin">Sign In</a>
                  </li>
                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                  <li>
                    <a href="/admin/signin">Admin?</a>
                  </li>
                </ul>
              </li>
            ) : (
              <li onClick={onLogout}>
                <a className="nav-link scrollto" href="#">
                  Logout
                </a>
              </li>
            )}
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${
              isMenuOpen ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMenu}
          ></i>
        </nav>

        <a
          href="/home#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Book a table
        </a>
      </div>
    </header>
  );
};

export default Header;
