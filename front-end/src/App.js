import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import CustomerSignupScreen from "./screens/customer/CustomerSignupScreen";
import AdminSignupScreen from "./screens/common/AdminSignupScreen";
import AdminSigninScreen from "./screens/common/AdminSigninScreen";
import UpdateStockScreen from "./screens/common/UpdateStockScreen";
import AddMenuScreen from "./screens/common/AddMenuScreen";
import MenuScreen from "./screens/common/MenuScreen";
import AdminUpdateProfile from "./screens/common/AdminUpdateProfileScreen";
import FeedBackScreen from "./screens/common/FeedBackScreen";

import CustomerSigninScreen from "./screens/customer/CustomerSigninScreen";
import CheckStockScreen from "./screens/common/CheckStockScreen";
import OwnerAddEmployeeScreen from "./screens/owner/OwnerAddEmployeeScreen";
import OwnerTableScreen from "./screens/owner/OwnerTableScreen";
import CartScreen from "./screens/customer/CartScreen";
import CustomerMenuScreen from "./screens/customer/CustomerMenuScreen";
import AcceptFeedBackScreen from "./screens/customer/AcceptFeedbackScreen";
import CustomerGetOrdersScreen from "./screens/customer/CustomerGetOrdersScreen";
import OwnerAddTableScreen from "./screens/owner/OwnerAddTableScreen";
import SupplierScreen from "./screens/supplier/supplierScreen";
import AddIngredientScreen from "./screens/supplier/AddIngredientScreen";
import ManagerManageChefScreen from "./screens/manager/ManagerManageChefScreen";
import ManagerAssignWaitersScreen from "./screens/manager/ManagerAssignWaitersScreen";
import OwnerRevenueScreen from "./screens/owner/OwnerRevenueScreen";
import ChefOrdersScreen from "./screens/chef/ChefOrdersScreen";
import WaiterServeOrderScreen from "./screens/waiter/WaiterServeOrderScreen";
import AcceptPaymentScreen from "./screens/waiter/AcceptPaymentScreen";
import ContactUsScreen from "./screens/common/ContactUsScreen";

import Home from "./screens/common/Home/Home";
import EditMenu from "./screens/common/EditMenu";
import AboutScreen from "./screens/common/AboutScreen";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/util/ScrollToTop";
import TopBar from "./components/Topbar/TopBar";
import Header from "./components/Header/Header";
import Preloader from "./components/util/Preloader/Preloader";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div>
      <Router>
        <Preloader />
        {/* <Navbar /> */}
        <TopBar />
        <Header />
        <Routes>
          {" "}
          {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />{" "}
          {/* Use element prop instead of component */}
          <Route path="/home" element={<Home />} />
          <Route path="/admin/signup" element={<AdminSignupScreen />} />
          <Route path="/admin/signin" element={<AdminSigninScreen />} />
          <Route path="/signin" element={<CustomerSigninScreen />} />
          <Route path="/signup" element={<CustomerSignupScreen />} />
          <Route
            path="/owneraddemployee"
            element={<OwnerAddEmployeeScreen />}
          />
          <Route path="/updatestock/:id" element={<UpdateStockScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/addmenu" element={<AddMenuScreen />} />
          <Route path="/editmenu" element={<EditMenu />} />
          <Route path="/stocks" element={<CheckStockScreen />} />
          <Route path="/feedback" element={<FeedBackScreen />} />
          <Route path="/profile" element={<AdminUpdateProfile />} />
          <Route path="/ownertables" element={<OwnerTableScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/customermenu" element={<CustomerMenuScreen />} />
          <Route path="/addtable" element={<OwnerAddTableScreen />} />
          <Route path="/orders" element={<CustomerGetOrdersScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/acceptpayment" element={<AcceptPaymentScreen />} />
          <Route path="/acceptfeedback" element={<AcceptFeedBackScreen />} />
          <Route path="/ingredients" element={<SupplierScreen />} />
          <Route path="/addingredients" element={<AddIngredientScreen />} />
          <Route path="/managechef" element={<ManagerManageChefScreen />} />
          <Route
            path="/assignwaiter"
            element={<ManagerAssignWaitersScreen />}
          />
          <Route path="/revenue" element={<OwnerRevenueScreen />} />
          <Route path="/cheforders" element={<ChefOrdersScreen />} />
          <Route path="/waiterorders" element={<WaiterServeOrderScreen />} />
          <Route path="/contactus" element={<ContactUsScreen />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
