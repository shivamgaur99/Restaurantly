package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class SupplierIngredientPk implements Serializable {

	private int supplier;

	private int ingredient;

	public SupplierIngredientPk() {
		// TODO Auto-generated constructor stub
	}

	public int getSupplier() {
		return supplier;
	}

	public void setSupplier(int supplier) {
		this.supplier = supplier;
	}

	public int getIngredient() {
		return ingredient;
	}

	public void setIngredient(int ingredient) {
		this.ingredient = ingredient;
	}

	public SupplierIngredientPk(int supplier, int ingredient) {
		this.supplier = supplier;
		this.ingredient = ingredient;
	}

	@Override
	public String toString() {
		return "SupplierIngredientPk [supplier=" + supplier + ", ingredient=" + ingredient + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ingredient;
		result = prime * result + supplier;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SupplierIngredientPk other = (SupplierIngredientPk) obj;
		if (ingredient != other.ingredient)
			return false;
		if (supplier != other.supplier)
			return false;
		return true;
	}

}
