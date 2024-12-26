package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "yearly_revenue")
public class YearlyRevenue extends BaseEntity {
	@Column(unique = true) 
	private int year;
	private double amount;

	public YearlyRevenue() {
		// TODO Auto-generated constructor stub
	}

	public YearlyRevenue(int year, double amount) {
		super();
		this.year = year;
		this.amount = amount;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	@Override
	public String toString() {
		return "YearlyRevenue [year=" + year + ", amount=" + amount + "]";
	}

}
