package com.app.dto;

public class WaiterOrderDTO {
	private int orderNo;
	private int tableNo;
	
	public WaiterOrderDTO() {
		// TODO Auto-generated constructor stub
	}

	public WaiterOrderDTO(int orderNo, int tableNo) {
		this.orderNo = orderNo;
		this.tableNo = tableNo;
	}

	public int getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(int orderNo) {
		this.orderNo = orderNo;
	}

	public int getTableNo() {
		return tableNo;
	}

	public void setTableNo(int tableNo) {
		this.tableNo = tableNo;
	}
	
}
