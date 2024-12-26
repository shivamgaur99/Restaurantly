package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "orders")
public class Orders extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "waiter_id")
	private Administration waiter;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@Column(scale = 2)
	private double amount;
	@Enumerated(EnumType.STRING)
	@Column(name = "order_status", length = 20)
	private OrderStatus status;
	@Enumerated(EnumType.STRING)
	@Column(name = "order_category", length = 20)
	private OrderCategory category;

	@Column(name = "order_Date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

	public Orders() {
		System.out.println("In Ctor of " + getClass().getName());
	}

	public Orders(Administration waiter, Customer customer, double amount, OrderStatus status, OrderCategory category,
			LocalDate date) {
		this.waiter = waiter;
		this.customer = customer;
		this.amount = amount;
		this.status = status;
		this.category = category;
		this.date = date;
	}

	@JsonIgnore
	public LocalDate getDate() {
		return date;
	}

	@JsonIgnore
	public void setDate(LocalDate date) {
		this.date = date;
	}

	@JsonIgnore
	public Administration getWaiter() {
		return waiter;
	}

	public void setWaiter(Administration waiter) {
		this.waiter = waiter;
	}
	@JsonIgnore
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
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

	public OrderCategory getCategory() {
		return category;
	}

	public void setCategory(OrderCategory category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Orders [amount=" + amount + ", status=" + status + ", category=" + category + "]";
	}

}
