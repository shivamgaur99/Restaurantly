package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(name = "order_details")
public class OrderDetails extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name = "menu_id")
	private Menu menu;
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Orders order;
	
	@ManyToOne
	@JoinColumn(name = "chef_id")
	private Administration chef;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private OrderDetailsStatus status;

	 private int qty;
	
	public OrderDetails() {
		System.out.println("In Ctor of " + getClass().getName());
	}

	

	public OrderDetails(Menu menu, Orders order, Administration chef, OrderDetailsStatus status, int qty) {
		this.menu = menu;
		this.order = order;
		this.chef = chef;
		this.status = status;
		this.qty = qty;
	}



	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public Administration getChef() {
		return chef;
	}

	public void setChef(Administration chef) {
		this.chef = chef;
	}

	public OrderDetailsStatus getStatus() {
		return status;
	}

	public void setStatus(OrderDetailsStatus status) {
		this.status = status;
	}
	
	

	public int getQty() {
		return qty;
	}



	public void setQty(int qty) {
		this.qty = qty;
	}



	@Override
	public String toString() {
		return "OrderDetails [status=" + status + "]";
	}

}
