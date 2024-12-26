package com.app.pojos;

import javax.persistence.*;

@Entity
public class Stock extends BaseEntity{

	@OneToOne
	@JoinColumn(name = "ingredient_id")
	@MapsId
	private Ingredient ingredient;
	private int qty;
	
	
	public Stock()
	{
		System.out.println("In ctor of "+getClass().getName());
		
	}


	public Stock(Ingredient ingredient, int qty) {
		super();
		this.ingredient = ingredient;
		this.qty = qty;
	}


	public Ingredient getIngredient() {
		return ingredient;
	}


	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}


	public int getQty() {
		return qty;
	}


	public void setQty(int qty) {
		this.qty = qty;
	}
	
	
}
