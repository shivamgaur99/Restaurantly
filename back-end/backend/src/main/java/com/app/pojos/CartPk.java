package com.app.pojos;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class CartPk implements Serializable {

	private int customer;

	private int menu;

	public CartPk() {
		// TODO Auto-generated constructor stub
	}

	public CartPk(int customer, int menu) {
		super();
		this.customer = customer;
		this.menu = menu;
	}

	public int getCustomer() {
		return customer;
	}

	public void setCustomer(int customer) {
		this.customer = customer;
	}

	public int getMenu() {
		return menu;
	}

	public void setMenu(int menu) {
		this.menu = menu;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + customer;
		result = prime * result + menu;
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
		CartPk other = (CartPk) obj;
		if (customer != other.customer)
			return false;
		if (menu != other.menu)
			return false;
		return true;
	}

}
