package com.app.service;

import java.util.List;

import com.app.pojos.OrderCategory;
import com.app.pojos.Orders;

public interface IOrderService {
	String addOrder(int chefId,int customerId, OrderCategory category);
	public String cancelOrder(int id);
	
	public String preparedOrder(int chefId, int orderId);
	public List<Orders> getAllOrders(int custId);
}