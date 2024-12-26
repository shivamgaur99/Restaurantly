package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Restaurant_table")
public class RestaurantTable extends BaseEntity{

	@Column(unique = true)
	private int tableNo;
	
	@OneToOne
	@JoinColumn(name = "waiter_id")
	@JsonIgnore
	private Administration waiter;
	
	@JoinColumn(name = "customer_id")
	@OneToOne
	@JsonIgnore
	private Customer customer;
	
	private int capacity;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private BookingStatus status;

	
	
	public RestaurantTable(int tableNo, int capacity, BookingStatus status) {
		this.tableNo = tableNo;
		this.capacity = capacity;
		this.status = status;
	}

	public RestaurantTable(int tableNo, Administration waiter, Customer customer, int capacity, BookingStatus status) {
		this.tableNo = tableNo;
		this.waiter = waiter;
		this.customer = customer;
		this.capacity = capacity;
		this.status = status;
	}

	public RestaurantTable(int tableNo, Administration waiter, int capacity, BookingStatus status) {
		super();
		this.tableNo = tableNo;
		this.waiter = waiter;
		this.capacity = capacity;
		this.status = status;
	}

	public RestaurantTable() {
		super();
	}
	
	public int getTableNo() {
		return tableNo;
	}

	public void setTableNo(int tableNo) {
		this.tableNo = tableNo;
	}

	public Administration getWaiter() {
		return waiter;
	}

	public void setWaiter(Administration waiter) {
		this.waiter = waiter;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	

	public BookingStatus getStatus() {
		return status;
	}

	public void setStatus(BookingStatus status) {
		this.status = status;
	}

	
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	
	
	
}
