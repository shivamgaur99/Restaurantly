package com.app.dto;

public class CartItemsDTO {
	private int menuId;
	private String menuName;
	private int quantity;
	private double amount;

	public CartItemsDTO() {
		// TODO Auto-generated constructor stub
	}

	public CartItemsDTO(int menuId, String menuName, int quantity, double amount) {
		this.menuId = menuId;
		this.menuName = menuName;
		this.quantity = quantity;
		this.amount = amount;
	}

	public int getMenuId() {
		return menuId;
	}

	public void setMenuId(int menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "CartItemsDTO [menuName=" + menuName + ", quantity=" + quantity + ", amount=" + amount + "]";
	}

}
