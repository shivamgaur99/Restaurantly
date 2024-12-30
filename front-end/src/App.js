import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
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

import ReactNotification from "react-notifications-component";
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
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" exact element={<Home />} /> {/* Use element prop instead of component */}
          <Route path="/home" exact element={<Home />} />

          <Route path="/admin/signup" exact element={<AdminSignupScreen />} />
          <Route path="/admin/signin" exact element={<AdminSigninScreen />} />
          <Route path="/signin" exact element={<CustomerSigninScreen />} />
          <Route path="/signup" exact element={<CustomerSignupScreen />} />
          <Route exact path="/owneraddemployee" element={<OwnerAddEmployeeScreen />} />

          <Route path="/updatestock" element={<UpdateStockScreen />} />
          <Route path="/menu" element={<MenuScreen />} />
          <Route path="/addmenu" element={<AddMenuScreen />} />
          <Route path="/editmenu" element={<EditMenu />} />
          <Route exact path="/stocks" element={<CheckStockScreen />} />
          <Route exact path="/feedback" element={<FeedBackScreen />} />
          <Route exact path="/profile" element={<AdminUpdateProfile />} />
          <Route exact path="/ownertables" element={<OwnerTableScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/customermenu" element={<CustomerMenuScreen />} />
          <Route exact path="/addtable" element={<OwnerAddTableScreen />} />
          <Route exact path="/orders" element={<CustomerGetOrdersScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/acceptpayment" element={<AcceptPaymentScreen />} />
          <Route exact path="/acceptfeedback" element={<AcceptFeedBackScreen />} />

          <Route exact path="/ingredients" element={<SupplierScreen />} />
          <Route exact path="/addingredients" element={<AddIngredientScreen />} />
          <Route exact path="/managechef" element={<ManagerManageChefScreen />} />
          <Route exact path="/assignwaiter" element={<ManagerAssignWaitersScreen />} />
          <Route exact path="/revenue" element={<OwnerRevenueScreen />} />
          <Route exact path="/cheforders" element={<ChefOrdersScreen />} />
          <Route exact path="/waiterorders" element={<WaiterServeOrderScreen />} />
          <Route exact path="/contactus" element={<ContactUsScreen />} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
