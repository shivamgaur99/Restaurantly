package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "manager_orders")
public class ManagerOrders extends BaseEntity {
	private int custId;
	@Column(length = 20)
	private String menuName;
	private int qty;
	
	public ManagerOrders() {
		// TODO Auto-generated constructor stub
	}

	public ManagerOrders(int custId, String menuName, int qty) {
		super();
		this.custId = custId;
		this.menuName = menuName;
		this.qty = qty;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
}
