package com.app.pojos;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "customers")
public class Customer extends BaseEntity {
	
	@Column(length = 20)
	private String name;
	
	@Column(length = 20,unique = true)
	private String username;
	@Column(length = 20)
	private String contact;
	@Column(length = 20, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	private Address address;

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)

	List<Orders> orders = new ArrayList<Orders>();

	@OneToMany(mappedBy = "menu", cascade = CascadeType.ALL)
	private Set<Cart> customerCart = new HashSet<Cart>();

	public Customer() {
		System.out.println("In Ctor of " + getClass().getName());
	}
	
	public Customer(String name, String username, String contact, String email, String password, Address address) {
		this.name = name;
		this.username = username;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.address = address;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
    
	@JsonIgnore
	public List<Orders> getOrders() {
		return orders;
	}

	public void setOrders(List<Orders> orders) {
		this.orders = orders;
	}
	@JsonIgnore
	public Set<Cart> getCustomerCart() {
		return customerCart;
	}

	public void setCustomerCart(Set<Cart> customerCart) {
		this.customerCart = customerCart;
	}

	@Override
	public String toString() {
		return "Customer [name=" + name + ", contact=" + contact + ", email=" + email + ", password=" + password
				+ ", address=" + address + "]";
	}

}
