package com.app.dto;

public class SupplierDTO {

	
	 private int ingredientId;
	 private int  supplierId;
	 
	 private double price;

	 
	 
	public SupplierDTO() {
	}

	public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	public int getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(int supplierId) {
		this.supplierId = supplierId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public SupplierDTO(int ingredientId, int supplierId, double price) {
		this.ingredientId = ingredientId;
		this.supplierId = supplierId;
		this.price = price;
	}

	@Override
	public String toString() {
		return "SupplierDTO [ingredientId=" + ingredientId + ", supplierId=" + supplierId + ", price=" + price + "]";
	}
	 
	 
}
