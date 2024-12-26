package com.app.service;

import java.util.List;

import com.app.dto.OrderDetailsDTO;

public interface IChefService {
	List<List<OrderDetailsDTO>> getAllApprovedOrders(int chefId);
}
