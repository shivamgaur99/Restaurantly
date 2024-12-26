package com.app.dto;

public class SupplierResponseDTO {
      private int ingredient_id;
	 private String name;
	 private String ingredient;
	 private double price;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getIngredient_id() {
		return ingredient_id;
	}

	public void setIngredient_id(int ingredient_id) {
		this.ingredient_id = ingredient_id;
	}

	public SupplierResponseDTO(int ingredient_id, String name, String ingredient, double price) {
		this.ingredient_id = ingredient_id;
		this.name = name;
		this.ingredient = ingredient;
		this.price = price;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	

	public SupplierResponseDTO(String name, double price) {
		this.name = name;
		this.price = price;
	}

	public String getIngredient() {
		return ingredient;
	}

	public void setIngredient(String ingredient) {
		this.ingredient = ingredient;
	}

	public SupplierResponseDTO(String name, String ingredient, double price) {
		this.name = name;
		this.ingredient = ingredient;
		this.price = price;
	}

	public SupplierResponseDTO() {
	}

	@Override
	public String toString() {
		return "SupplierResponseDTO [ingredient_id=" + ingredient_id + ", name=" + name + ", ingredient=" + ingredient
				+ ", price=" + price + "]";
	}
	
	 

	
	 
	 
	 
}
