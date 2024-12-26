package com.app.dto;

public class StockDTO {

	private int id;

	private String ingredient; 
	
	private Integer qty;

	

	public StockDTO(int id, String ingredient, Integer qty) {
		this.id = id;
		this.ingredient = ingredient;
		this.qty = qty;
	}

	public StockDTO(String ingredient, Integer qty) {

		this.qty = qty;
	}

	public StockDTO() {
	}

	public String getIngredient() {
		return ingredient;
	}

	public void setIngredient(String ingredient) {
		this.ingredient = ingredient;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "StockDTO [id=" + id + ", ingredient=" + ", qty=" + qty + "]";
	}

}
