package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IAdminDao;
import com.app.dao.IOrderDao;
import com.app.dao.IOrderDetailsDao;
import com.app.dao.IRestaurantTableDao;
import com.app.dto.WaiterOrderDTO;
import com.app.pojos.Administration;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;
import com.app.pojos.RestaurantTable;

@Service
@Transactional
public class WaiterServiceImpl implements IWaiterService {
	
	@Autowired
	private IRestaurantTableDao restaurantTableRepo;
	@Autowired
	private IAdminDao adminRepo;
	@Autowired
	private IOrderDao orderRepo;
	@Autowired
	private IOrderDetailsDao orderDetailsRepo;

	@Override
	public String assignWaiter(int waiterId, int tableNo) {
		RestaurantTable table = restaurantTableRepo.findBytableNo(tableNo);
		table.setWaiter(adminRepo.getOne(waiterId));
		return "Assigned Waiter Successfully";
	}

	@Override
	public List<WaiterOrderDTO> getPreparedOrders(int waiterId) {
		Administration waiter = adminRepo.getOne(waiterId);
		List<Orders> orders = orderRepo.getUnpaidOrders(waiter, OrderStatus.UNPAID);
		int tableId = restaurantTableRepo.findByWaiter(waiter).getTableNo();
		List<WaiterOrderDTO> returnOrders = new ArrayList<>();
		for(Orders o : orders) {
			List<OrderDetails> orderDetails = orderDetailsRepo.getPreparedOrders(o, OrderDetailsStatus.PREPARED);
			if(!orderDetails.isEmpty())
				returnOrders.add(new WaiterOrderDTO(o.getId(), tableId));
		}
		return returnOrders;
	}
}
