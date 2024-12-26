package com.app.dto;

import com.app.pojos.Administration;
import com.app.pojos.BookingStatus;
import com.app.pojos.Customer;

public class TableDTO {

	private int tableNo;
	private int capacity;
	private BookingStatus status;
	private int waiter_id;
	private int customer_id;

	public TableDTO() {
		// TODO Auto-generated constructor stub
	}

	public TableDTO(int tableNo, int capacity, BookingStatus status, int waiter_id, int customer_id) {
		super();
		this.tableNo = tableNo;
		this.capacity = capacity;
		this.status = status;
		this.waiter_id = waiter_id;
		this.customer_id = customer_id;
	}

	
	public TableDTO(int tableNo, int customer_id) {
		this.tableNo = tableNo;
		this.customer_id = customer_id;
	}

	public int getTableNo() {
		return tableNo;
	}

	public void setTableNo(int tableNo) {
		this.tableNo = tableNo;
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

	public int getWaiter_id() {
		return waiter_id;
	}

	public void setWaiter_id(int waiter_id) {
		this.waiter_id = waiter_id;
	}

	public int getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}

	
	
}
