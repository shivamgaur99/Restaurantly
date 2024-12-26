package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.OrderCategory;

public class OrderDTO {
	private int chefId;
	private int customerId;
	private OrderCategory category;
	
	public OrderDTO() {
		// TODO Auto-generated constructor stub
	}

	public OrderDTO (int chefId, int customerId, OrderCategory category) {
		this.chefId = chefId;
		this.customerId = customerId;
		this.category = category;
	}

	public int getChefId() {
		return chefId;
	}

	public void setChefId(int chefId) {
		this.chefId = chefId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public OrderCategory getCategory() {
		return category;
	}

	public void setCategory(OrderCategory category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "OrderDTO [chefId=" + chefId + ", customerId=" + customerId + ", category="
				+ category + "]";
	}
	
	
	
}
