package com.app.dto;

import java.util.List;

import com.app.pojos.MenuCategory;

public class MenuDTO {

	private String menuName;
	private double price;
	private MenuCategory category;
	private List<Integer> ingredientId;
	
	public MenuDTO() {
		// TODO Auto-generated constructor stub
	}

	public MenuDTO(String menuName, double price, MenuCategory category, List<Integer> ingredientId) {
		super();
		this.menuName = menuName;
		this.price = price;
		this.category = category;
		this.ingredientId = ingredientId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public MenuCategory getCategory() {
		return category;
	}

	public void setCategory(MenuCategory category) {
		this.category = category;
	}

	public List<Integer> getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(List<Integer> ingredientId) {
		this.ingredientId = ingredientId;
	}

	@Override
	public String toString() {
		return "MenuDTO [menuName=" + menuName + ", price=" + price + ", category=" + category + ", ingredientId="
				+ ingredientId + "]";
	}
		
}
