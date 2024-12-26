package com.app.dto;

public class CartDTO {
	private int custId;
	private int menuId;
	private int qty;
	
	public CartDTO() {
		// TODO Auto-generated constructor stub
	}

	public CartDTO(int custId, int menuId, int qty) {
		super();
		this.custId = custId;
		this.menuId = menuId;
		this.qty = qty;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "CartProcess [custId=" + custId + ", menuId=" + menuId + ", qty=" + qty + "]";
	}
	
	
}
