package com.app.service;

import java.util.List;

import com.app.dto.WaiterOrderDTO;
import com.app.pojos.Orders;

public interface IWaiterService {
	String assignWaiter(int waiterId,int tableNo);

	List<WaiterOrderDTO> getPreparedOrders(int waiterId);
}
