package com.app.service;

import java.util.List;

import com.app.dto.ManagerOrderDTO;
import com.app.pojos.ManagerOrders;


public interface IManagerService {
	List<List<ManagerOrders>> getPlacedOrders();
	
	String addPlacedOrders(ManagerOrderDTO orders);
}
