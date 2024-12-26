package com.app.pojos;

import javax.persistence.*;

@Embeddable
public class Address {
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;

	public Address() {
		System.out.println("in adr ctor " + getClass().getName());
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Address(String city, String state, String country) {
		this.city = city;
		this.state = state;
		this.country = country;
	}

}
