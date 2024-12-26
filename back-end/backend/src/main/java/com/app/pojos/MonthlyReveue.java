package com.app.pojos;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "monthly_revenue")
public class MonthlyReveue {
	@EmbeddedId
	private MonthlyRevenuePk id;

	private double amount;

	public MonthlyReveue() {
		// TODO Auto-generated constructor stub
	}

	public MonthlyReveue(MonthlyRevenuePk id, double amount) {
		super();
		this.id = id;
		this.amount = amount;
	}

	public MonthlyRevenuePk getId() {
		return id;
	}

	public void setId(MonthlyRevenuePk id) {
		this.id = id;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

}
