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
@Table(name = "cart")
@IdClass(CartPk.class)
public class Cart implements Serializable {

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id",referencedColumnName = "id")
	private Customer customer;

	@Id
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "menu_id",referencedColumnName = "id")
	private Menu menu;

	@Column(name = "quantity")
	private int quantity;
	
	public Cart() {
		// TODO Auto-generated constructor stub
	}

	public Cart(Customer customer, Menu menu, int quantity) {
		super();
		this.customer = customer;
		this.menu = menu;
		this.quantity = quantity;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
