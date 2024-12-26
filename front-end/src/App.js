import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CustomerSignupScreen from "./screens/customer/CustomerSignupScreen";
import AdminSignupScreen from "./screens/common/AdminSignupScreen";
import AdminSigninScreen from "./screens/common/AdminSigninScreen";
import UpdateStockScreen from "./screens/common/UpdateStockScreen";
import AddMenuScreen from "./screens/common/AddMenuScreen";
import MenuScreen from "./screens/common/MenuScreen";
import AdminUpdateProfile from "./screens/common/AdminUpdateProfileScreen";
import FeedBackScreen from "./screens/common/FeedBackScreen";
import Footer from "./components/Footer";

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
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import AboutScreen from "./screens/common/AboutScreen";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />

            <Route path="/adminsignup" exact component={AdminSignupScreen} />
            <Route path="/adminsignin" exact component={AdminSigninScreen} />
            <Route
              path="/customersignin"
              exact
              component={CustomerSigninScreen}
            />
            <Route
              path="/customersignup"
              exact
              component={CustomerSignupScreen}
            />
            <Route
              exact
              path="/owneraddemployee"
              component={OwnerAddEmployeeScreen}
            />

            <Route path="/updatestock" component={UpdateStockScreen} />
            <Route path="/menu" component={MenuScreen} />
            <Route path="/addmenu" component={AddMenuScreen} />
            <Route path="/editmenu" component={EditMenu} />
            <Route exact path="/stocks" component={CheckStockScreen} />
            <Route exact path="/feedback" component={FeedBackScreen} />
            <Route exact path="/profile" component={AdminUpdateProfile} />
            <Route exact path="/ownertables" component={OwnerTableScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/customermenu" component={CustomerMenuScreen} />
            <Route exact path="/addtable" component={OwnerAddTableScreen} />
            <Route exact path="/orders" component={CustomerGetOrdersScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route
              exact
              path="/acceptpayment"
              component={AcceptPaymentScreen}
            />
            <Route
              exact
              path="/acceptfeedback"
              component={AcceptFeedBackScreen}
            />

            <Route exact path="/ingredients" component={SupplierScreen} />
            <Route
              exact
              path="/addingredients"
              component={AddIngredientScreen}
            />
            <Route
              exact
              path="/managechef"
              component={ManagerManageChefScreen}
            />
            <Route
              exact
              path="/assignwaiter"
              component={ManagerAssignWaitersScreen}
            />
            <Route exact path="/revenue" component={OwnerRevenueScreen} />
            <Route exact path="/cheforders" component={ChefOrdersScreen} />
            <Route
              exact
              path="/waiterorders"
              component={WaiterServeOrderScreen}
            />
            <Route exact path="/contactus" component={ContactUsScreen} />
          </Switch>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
