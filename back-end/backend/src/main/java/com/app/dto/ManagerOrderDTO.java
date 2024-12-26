package com.app.dto;

import java.util.List;

import com.app.pojos.ManagerOrders;

public class ManagerOrderDTO {
	private List<ManagerOrders> placeOrders ;
	public ManagerOrderDTO() {
		// TODO Auto-generated constructor stub
	}
	public ManagerOrderDTO(List<ManagerOrders> placeOrders) {
		super();
		this.placeOrders = placeOrders;
	}
	public List<ManagerOrders> getPlaceOrders() {
		return placeOrders;
	}
	public void setPlaceOrders(List<ManagerOrders> placeOrders) {
		this.placeOrders = placeOrders;
	}
}
