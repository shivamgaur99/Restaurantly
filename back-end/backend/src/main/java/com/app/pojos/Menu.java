package com.app.pojos;

import java.util.HashSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "menu_details")
public class Menu extends BaseEntity {
	@Column(name = "menu_name", length = 20)
	private String menuName;
	@Column(scale = 2)
	private double price;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private MenuCategory category;
	
	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST }) //mandatory
	@JoinTable(name = "menu_ingredient", 
	joinColumns = @JoinColumn(name = "menu_id"),
	inverseJoinColumns = @JoinColumn(name = "ingredinet_id"))
	private List<Ingredient> ingredients= new ArrayList<>();
	
	@OneToMany(mappedBy = "menu")
	private List<OrderDetails> orderDetails;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	Set<Cart> menuCart = new HashSet<Cart>();

	public Menu() {
		System.out.println("In Ctor of " + getClass().getName());
	}

	
	public Menu(String menuName, double price, MenuCategory category) {
		super();
		this.menuName = menuName;
		this.price = price;
		this.category = category;
	}


	public Menu(String menuName, double price, MenuCategory category, List<Ingredient> ingredients,
			List<OrderDetails> orderDetails) {
		super();
		this.menuName = menuName;
		this.price = price;
		this.category = category;
		this.ingredients = ingredients;
		this.orderDetails = orderDetails;
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

	@JsonIgnore
	public List<Ingredient> getIngredients() {
		return ingredients;
	}
	@JsonIgnore
	public void setIngredients(List<Ingredient> ingredients) {
		this.ingredients = ingredients;
	}
	@JsonIgnore
	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}
	@JsonIgnore
	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}
	
	
	@JsonIgnore
	public Set<Cart> getMenuCart() {
		return menuCart;
	}

	@JsonIgnore
	public void setMenuCart(Set<Cart> menuCart) {
		this.menuCart = menuCart;
	}


	@Override
	public String toString() {
		return "Menu [menuName=" + menuName + ", price=" + price + ", category=" + category + "]";
	}

}
