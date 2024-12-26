package com.app.dto;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.OrderCategory;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;

public class OrderResponseDTO {
 
	 private int id;
	 private  double amount;
	 private OrderStatus status;
	
	 private LocalDate date;
	
	public OrderResponseDTO() {
	}
	public OrderResponseDTO(int id, double amount, OrderStatus status, LocalDate date) {
		this.id = id;
		this.amount = amount;
		this.status = status;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public OrderStatus getStatus() {
		return status;
	}
	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "OrderResponseDTO [id=" + id + ", amount=" + amount + ", status=" + status + ", date=" + date + "]";
	}
	
	

	
	 
	 
}
