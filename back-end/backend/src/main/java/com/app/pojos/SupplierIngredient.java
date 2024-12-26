package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "supplier_ingredient")
@IdClass(SupplierIngredientPk.class)
public class SupplierIngredient implements Serializable {

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "supplier_id",referencedColumnName = "id")
	private Administration supplier;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ingredient_ID",referencedColumnName = "id")
	private Ingredient ingredient;

	@Column(name = "price")
	private double price;
	
	public SupplierIngredient() {
		// TODO Auto-generated constructor stub
	}

	public SupplierIngredient(Administration supplier, Ingredient ingredient, double price) {
		super();
		this.supplier = supplier;
		this.ingredient = ingredient;
		this.price = price;
	}

	public Administration getSupplier() {
		return supplier;
	}

	public void setSupplier(Administration supplier) {
		this.supplier = supplier;
	}

	public Ingredient getIngredient() {
		return ingredient;
	}

	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "SupplierIngredient [supplier=" + supplier + ", ingredient=" + ingredient + ", price=" + price + "]";
	}
	
	
	
}
