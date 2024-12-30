package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IMenuDao;
import com.app.dao.IOrderDetailsDao;
import com.app.dto.OrderDetailsDTO;
import com.app.pojos.Menu;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;

@Service
@Transactional
public class ChefServiceImpl implements IChefService {

	@Autowired
	private IOrderDetailsDao orderDetailsRepo;
	@Autowired
	private IMenuDao menuRepo;

	@Override
	public List<List<OrderDetailsDTO>> getAllApprovedOrders(int chefId) {
		List<OrderDetails> orderDetails = orderDetailsRepo.findByChefId(chefId);
		List<List<OrderDetailsDTO>> outer = new ArrayList<>();
		List<OrderDetailsDTO> inner = new ArrayList<>();

		List<Integer> menuIdList = new ArrayList<>();
		for (OrderDetails o : orderDetails) {
			menuIdList.add(o.getMenu().getId());
		}
		List<Menu> menuList = menuRepo.findAllById(menuIdList);
		int oid = 0;
		if (orderDetails != null && !orderDetails.isEmpty()) {
			oid = orderDetails.get(0).getOrder().getId();
		}

		for (OrderDetails o : orderDetails) {
			// Find the menu item from the menuList
			Menu menu = null;
			for (Menu m : menuList) {
				if (m.getId() == o.getMenu().getId()) {
					menu = m;
					break;
				}
			}

			// If menu item is found, process the order details
			if (menu != null) {
				if (oid == o.getOrder().getId() && o.getStatus() == OrderDetailsStatus.APPROVED) {
					inner.add(new OrderDetailsDTO(oid, menu.getMenuName(), o.getQty()));
				} else if (o.getStatus() == OrderDetailsStatus.APPROVED) {
					if (!inner.isEmpty())
						outer.add(inner);
					inner = new ArrayList<>();
					inner.add(new OrderDetailsDTO(o.getOrder().getId(), menu.getMenuName(), o.getQty()));
					oid = o.getOrder().getId();
				}
			}
		}
		if (!inner.isEmpty())
			outer.add(inner);
		return outer;
	}

}
