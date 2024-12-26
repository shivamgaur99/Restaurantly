package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IManagerDao;
import com.app.dto.ManagerOrderDTO;
import com.app.pojos.ManagerOrders;

@Service
@Transactional
public class ManagerServiceImpl implements IManagerService {

	@Autowired
	private IManagerDao managerRepo;

	@Override
	public List<List<ManagerOrders>> getPlacedOrders() {
		List<List<ManagerOrders>> allOrders = new ArrayList<>();
		List<ManagerOrders> inner = new ArrayList<ManagerOrders>();
		List<ManagerOrders> loop = managerRepo.findAll();
		int cid = 0;
		if (loop != null)
			cid = loop.get(0).getCustId();
		for (ManagerOrders order : loop) {
			System.out.println("Order cusid is " + order.getCustId() + " cid" + cid);
			if (cid == order.getCustId()) {
				System.out.println("in equal " + order.getId());
				inner.add(order);	
			}else {
				System.out.println("in not equal " + order.getId());
				allOrders.add(inner);
				inner = new ArrayList<ManagerOrders>();
				System.out.println(allOrders);
				inner.add(order);
				cid = order.getCustId();
			}
		}
		allOrders.add(inner);
		return allOrders;
	}

	@Override
	public String addPlacedOrders(ManagerOrderDTO orders) {
		List<ManagerOrders> placeOrders = orders.getPlaceOrders();
		managerRepo.saveAll(placeOrders);
		return "Placed Order Successfully";
	}

}
