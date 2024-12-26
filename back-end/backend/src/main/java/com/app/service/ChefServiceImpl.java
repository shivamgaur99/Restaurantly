package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IMenuDao;
import com.app.dao.IOrderDetailsDao;
import com.app.dto.OrderDetailsDTO;
import com.app.pojos.Cart;
import com.app.pojos.Menu;
import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;
import com.app.pojos.OrderStatus;

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
		List<List<OrderDetailsDTO>> outer = new ArrayList<List<OrderDetailsDTO>>();
		List<OrderDetailsDTO> inner = new ArrayList<OrderDetailsDTO>();

		List<Integer> menuIdList = new ArrayList<>();
		for (OrderDetails o : orderDetails) {
			menuIdList.add(o.getMenu().getId());
		}
		List<Menu> menuList = menuRepo.findAllById(menuIdList);
		int oid = 0;
		if (orderDetails != null)
			oid = orderDetails.get(0).getOrder().getId();
		for (OrderDetails o : orderDetails) {
			Menu menu = menuList.get(menuList.indexOf(menuRepo.getOne(o.getMenu().getId())));
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
		if (!inner.isEmpty())
			outer.add(inner);
		return outer;
	}

}
