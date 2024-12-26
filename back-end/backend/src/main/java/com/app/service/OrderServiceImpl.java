package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAdminDao;
import com.app.dao.ICartDao;
import com.app.dao.ICustomerDao;
import com.app.dao.IManagerDao;
import com.app.dao.IMenuDao;
import com.app.dao.IOrderDao;
import com.app.dao.IOrderDetailsDao;
import com.app.dao.IRestaurantTableDao;
import com.app.pojos.Administration;
import com.app.pojos.Cart;
import com.app.pojos.Customer;
import com.app.pojos.ManagerOrders;
import com.app.pojos.Menu;
import com.app.pojos.OrderCategory;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;
import com.app.pojos.RestaurantTable;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {

	@Autowired
	private IRestaurantTableDao tableRepo;
	@Autowired
	private IAdminDao adminRepo;
	@Autowired
	private ICartDao cartRepo;
	@Autowired
	private IOrderDao orderRepo;
	@Autowired
	private ICustomerDao customerRepo;
	@Autowired
	private IOrderDetailsDao orderDetailsRepo;
	@Autowired
	private IMenuDao menuRepo;
	@Autowired
	private IRestaurantTableDao restaurantTableRepo;
	@Autowired
	private IManagerDao managerRepo;

	@Override
	public String addOrder(int chefId, int customerId, OrderCategory category) {
		Administration chef = adminRepo.findById(chefId).get();
		Customer customer = customerRepo.getOne(customerId);
		RestaurantTable table = restaurantTableRepo.findByCustomer(customer);
		Administration waiter = tableRepo.findBytableNo(table.getTableNo()).getWaiter();
		Orders o = new Orders(waiter, customer, 0.0, OrderStatus.UNPAID, category, LocalDate.now());
		orderRepo.save(o);
		double amount = 0;

		List<Cart> cart = cartRepo.findByCustomerId(customerId);

		List<Integer> menuIdList = new ArrayList<>();
		for (Cart c : cart) {
			menuIdList.add(c.getMenu().getId());
		}

		List<Menu> menuList = menuRepo.findAllById(menuIdList);

		for (Cart c : cart) {
			Menu menu = menuList.get(menuList.indexOf(menuRepo.getOne(c.getMenu().getId())));
			amount += c.getQuantity() * menu.getPrice();
			if(c.getQuantity() > 0)
			orderDetailsRepo.save(new OrderDetails(menu, o, chef, OrderDetailsStatus.APPROVED, c.getQuantity()));
		}
		cartRepo.deleteCustomerCart(customerId);
		o.setAmount(amount);
		managerRepo.deleteAll(managerRepo.findByCustId(customerId));
		return "Order Placed Successfully";
	}

	@Override
	public String cancelOrder(int orderId) {
		boolean flag = false;
		Orders order = orderRepo.findByCustomer(orderId).get();

		List<OrderDetails> details = orderDetailsRepo.findByOrderId(order.getId());

		for (OrderDetails orderDetails : details) {

			if (orderDetails.getStatus() != OrderDetailsStatus.PREPARED) {
				orderDetails.setStatus(OrderDetailsStatus.CANCEL);
				flag = true;
			}
		}
		if (flag == true) {
			return "Order cancelled successfully";
		}

		return "could not cancel order";
	}

	@Override
	public String preparedOrder(int ChefId, int orderId) {
		List<OrderDetails> details = orderDetailsRepo.findByChefId(ChefId);

		for (OrderDetails orderDetails : details) {
			if(orderDetails.getOrder().getId() == orderId) {
				orderDetails.setStatus(OrderDetailsStatus.PREPARED);
				orderDetailsRepo.save(orderDetails);
			}
		}
		return "Order status changed to prepared";
	}
	
	@Override
	public List<Orders> getAllOrders(int custId)
	{
		return orderRepo.findByCustomerId(custId);
		
	}
	
	

}
