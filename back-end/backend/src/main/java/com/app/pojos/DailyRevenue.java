package com.app.pojos;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "daily_revenue")
public class DailyRevenue extends BaseEntity {

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(unique = true)
	private LocalDate date;
	
	private double amount;

	public DailyRevenue() {
		// TODO Auto-generated constructor stub
	}

	public DailyRevenue(LocalDate date, double amount) {
		super();
		this.date = date;
		this.amount = amount;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "DailyRevenue [date=" + date + ", amount=" + amount + "]";
	}

}
