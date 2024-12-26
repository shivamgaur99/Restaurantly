package com.app.dto;

public class OrderDetailsDTO {

	private int orderId;
	private String orderName;
	private int quantity;

	public OrderDetailsDTO() {
		// TODO Auto-generated constructor stub
	}

	public OrderDetailsDTO(int orderId, String orderName, int quantity) {
		super();
		this.orderId = orderId;
		this.orderName = orderName;
		this.quantity = quantity;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getOrderName() {
		return orderName;
	}

	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "ChefOrderDTO [orderId=" + orderId + ", orderName=" + orderName + ", quantity=" + quantity + "]";
	}

}
