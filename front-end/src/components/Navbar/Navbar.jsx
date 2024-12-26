import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { OwnerSidebarData } from "../sidebardata/OwnerSidebarData";
import { ManagerSidebarData } from "../sidebardata/ManagerSidebarData";
import { ChefSidebarData } from "../sidebardata/ChefSidebarData";
import { WaiterSidebarData } from "../sidebardata/WaiterSidebarData";
import { SupplierSidebarData } from "../sidebardata/SupplierSidebarData";
import { CustomerSidebarData } from "../sidebardata/CustomerSidebarData";
import { adminLogout } from "../../actions/adminActions";
import { customerLogout } from "../../actions/customerActions";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For dropdown
  const [menuOpen, setMenuOpen] = useState(false); // For common links dropdown on mobile
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
  };

  const showSidebar = () => setSidebar(!sidebar);

  const isMobile = useMediaQuery("(max-width:600px)");

  // Open and close dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Toggle common links menu on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Main Navbar */}
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "black", borderRadius: 0, height: "64px" }}
      >
        <Toolbar sx={{ minHeight: "64px", justifyContent: "space-between" }}>
          {/* Logo and Menu Toggle */}
          {(response || loggedin || response1) && (
            <IconButton color="inherit" onClick={showSidebar}>
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Box
                component="span"
                sx={{ color: "#ff9900", fontWeight: "bold" }}
              >
                Delightful
              </Box>
              Plates
            </Typography>
          </Link>
          {/* Navbar Links for larger screens */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "20px",
              }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/home"
                style={{ marginRight: "20px" }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/contactus"
                style={{ marginRight: "20px" }}
              >
                Contact Us
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/about"
                style={{ marginRight: "20px" }}
              >
                About Us
              </Button>

              {/* Dropdown for Login/Sign Up */}
              {!adminSignin.response && !customerSignin.response1 && !role ? (
                <div className="navbar-dropdown">
                  <Button color="inherit" onClick={handleClick}>
                    Sign In / Sign Up
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem component={Link} to="/adminsignin">
                      Admin Sign In
                    </MenuItem>
                    <MenuItem component={Link} to="/customersignup">
                      Customer Signup
                    </MenuItem>
                    <MenuItem component={Link} to="/customersignin">
                      Customer Sign In
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button color="inherit" onClick={onLogout}>
                  Log Out
                </Button>
              )}
            </Box>
          )}

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <IconButton color="inherit" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Collapsible Menu for Common Links on Mobile */}
      {isMobile && menuOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "64px",
            left: 0,
            width: "100%",
            backgroundColor: "black",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <List>
            <ListItem button component={Link} to="/home" onClick={toggleMenu}>
              <ListItemText
                primary="Home"
                sx={{
                  color: "white",
                  textAlign: "center",
                  "&:hover": {
                    color: "#ff9900",
                  },
                }}
              />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/contactus"
              onClick={toggleMenu}
            >
              <ListItemText
                primary="Contact Us"
                sx={{
                  color: "white",
                  textAlign: "center",
                  "&:hover": {
                    color: "#ff9900",
                  },
                }}
              />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={toggleMenu}>
              <ListItemText
                primary="About Us"
                sx={{
                  color: "white",
                  textAlign: "center",
                  "&:hover": {
                    color: "#ff9900",
                  },
                }}
              />
            </ListItem>
            {!adminSignin.response && !customerSignin.response1 && !role ? (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  onClick={handleClick}
                  sx={{
                    color: "white",
                    textTransform: "none",
                    margin: "0 40px 40px 40px",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  Sign In / Sign Up
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{ textAlign: "center" }}
                >
                  <MenuItem
                    component={Link}
                    to="/adminsignin"
                    onClick={toggleMenu}
                  >
                    Admin Sign In
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/customersignup"
                    onClick={toggleMenu}
                  >
                    Customer Signup
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/customersignin"
                    onClick={toggleMenu}
                  >
                    Customer Sign In
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                onClick={() => {
                  toggleMenu();
                  onLogout();
                }}
                sx={{
                  color: "white",
                  margin: "0 40px 40px 40px",
                  textTransform: "none",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                Log Out
              </Button>
            )}
          </List>
        </Box>
      )}

      {/* Sidebar Drawer for mobile */}
      <Drawer anchor="left" open={sidebar} onClose={showSidebar}>
        <Box sx={{ width: 250 }}>
          <List>
            {show &&
              (user === "OWNER" || role === "OWNER") &&
              OwnerSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {show &&
              (user === "MANAGER" || role === "MANAGER") &&
              ManagerSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {show &&
              (user === "CHEF" || role === "CHEF") &&
              ChefSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {show &&
              (user === "WAITER" || role === "WAITER") &&
              WaiterSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {show &&
              (user === "SUPPLIER" || role === "SUPPLIER") &&
              SupplierSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            {show &&
              (user === "CUSTOMER" || role === "CUSTOMER") &&
              CustomerSidebarData.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  component={Link}
                  to={item.path}
                  onClick={showSidebar}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;
