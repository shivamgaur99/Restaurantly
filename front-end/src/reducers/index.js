import { combineReducers } from 'redux'
import {
  adminSigninReducer,
  adminSignupReducer,
  admincheckStockReducer,
  adminsupplierReducer,
  adminupdateReducer,
  adminmenuReducer,
  admingetallingredientsReducer,
  adminAddMenuReducer,
  admingetFeedbackReducer,
  admingetprofileReducer,
  adminupdateProfileReducer,
} from './adminReducer'
import {
  customerSigninReducer,
  customerSignupReducer,
  customerCartReducer,
  updateCartcustomerCartReducer,
  customerPlaceOrderReducer,
  customerAddToCartReducer,
  customerBookTableReducer,
  customerGetAllOrdersReducer,
  customerFeedbackReducer,
  customerPaybillReducer,
} from './customerReducers'
import {
  ownerAddEmployeeReducer,
  ownergetalltablesReducer,
  owneraddtableReducer,
} from './ownerreducer/ownerReducer'

import {
  supplierGetAllIngredientReducer,
  supplierUpdateIngredientReducer,
  supplierAddIngredientReducer,
} from './supplierreducer/supplierReducer'
import {
  managerGetOrdersReducer,
  getChefsReducer,
  approveOrderReducer,
  getWaitersReducer,
  assignWaiterReducer,
  managergetalltablesReducer,
} from './ManagerReducers'

import {
  allWeekRevenueReducer,
  allMonthRevenueReducer,
  todaysRevenueReducer,
  thisWeekRevenueReducer,
  thisMonthRevenueReducer,
  thisYearRevenueReducer,
} from './RevenueReducer'

import {
  chefGetApprovedOrdersReducer,
  chefPrepareOrderReducer,
} from './ChefReducer'

import {
  waiterGetPreparedOrdersReducer,
  waiterServeOrderReducer,
} from './WaiterReduce'

const reducers = combineReducers({
  adminSignup: adminSignupReducer,
  adminSignin: adminSigninReducer,
  customerSignup: customerSignupReducer,
  customerSignin: customerSigninReducer,
  stockChecking: admincheckStockReducer,
  ownerAddEmployee: ownerAddEmployeeReducer,
  supplierChecking: adminsupplierReducer,
  updateStock: adminupdateReducer,
  getallmenu: adminmenuReducer,
  getAllIngredients: admingetallingredientsReducer,
  // addmenu: adminAddMenu,
  customerCart: customerCartReducer,
  updateCart: updateCartcustomerCartReducer,
  customerPlaceOrder: customerPlaceOrderReducer,
  customerAddToCart: customerAddToCartReducer,
  addmenu: adminAddMenuReducer,
  getfeedback: admingetFeedbackReducer,
  getadminProfile: admingetprofileReducer,
  adminupdateProfile: adminupdateProfileReducer,
  ownergetTables: ownergetalltablesReducer,
  owneraddtable: owneraddtableReducer,
  supplierGetIngredient: supplierGetAllIngredientReducer,
  supplierUpdateIngredient: supplierUpdateIngredientReducer,
  supplierAddIngredient: supplierAddIngredientReducer,
  managerGetOrders: managerGetOrdersReducer,
  getAllChefs: getChefsReducer,
  managerApproveOrder: approveOrderReducer,
  getWaiters: getWaitersReducer,
  assignWaiter: assignWaiterReducer,
  managerGetAllTables: managergetalltablesReducer,
  customerBookTable: customerBookTableReducer,
  customerGetAllOrders: customerGetAllOrdersReducer,
  customerFeedback: customerFeedbackReducer,
  customerPayBill: customerPaybillReducer,
  allWeekRevenue: allWeekRevenueReducer,
  allMonthRevenue: allMonthRevenueReducer,
  todaysRevenue: todaysRevenueReducer,
  thisWeeksRevenue: thisWeekRevenueReducer,
  thisMonthsRevenue: thisMonthRevenueReducer,
  thisYearsRevenue: thisYearRevenueReducer,
  chefGetApprovedOrders: chefGetApprovedOrdersReducer,
  chefPrepareOrder: chefPrepareOrderReducer,
  waiterGetPreparedOrders: waiterGetPreparedOrdersReducer,
  waiterServeOrder: waiterServeOrderReducer,
})

export default reducers
