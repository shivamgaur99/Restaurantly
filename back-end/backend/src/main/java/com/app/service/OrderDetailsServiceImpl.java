package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IOrderDao;
import com.app.dao.IOrderDetailsDao;
import com.app.pojos.OrderDetailsStatus;

@Service
@Transactional
public class OrderDetailsServiceImpl implements IOrderDetailsService {
	
	@Autowired
	private IOrderDetailsDao orderDetailsRepo;
	
	@Autowired
	private IOrderDao orderRepo;

	@Override
	public String changeOrderDetailStatus(int orderId) {
		orderDetailsRepo.changOrderDetailsStatus(orderRepo.getOne(orderId), OrderDetailsStatus.SERVED);
		return "Served The Order";
	}

}
