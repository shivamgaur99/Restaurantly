package com.app.pojos;

import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "administration")
public class Administration extends BaseEntity {
	
	@JsonProperty("name")
	@Column(length = 20)
	private String name;
	@Column(length = 20, unique = true, nullable = false)
	private String username;
	@JsonProperty("email")
	@Column(length = 20, unique = true)
	private String email;
	@Column(nullable = false)
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private AdminRoles role;
	@OneToMany(mappedBy = "waiter",cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Orders> ordersList;
	@OneToMany(mappedBy = "chef", cascade = CascadeType.ALL)
	private List<OrderDetails> orderDetailsList;
	@OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
	private Set<SupplierIngredient> supplierIngredients;

	public Administration() {
		System.out.println("In Ctor of " + getClass().getName());
	}
	
	

	public Administration(String name, String username, String email, String password, AdminRoles role) {
		this.name = name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	
//	public Administration(String name, String username, String email,  AdminRoles role) {
////		this.id=id;
//		this.name = name;
//		this.username = username;
//		this.email = email;
////		this.password = password;
//		this.role = role;
//	}



	public Administration(String name, String email, String password, AdminRoles role) {
		
		this.username = name;
		this.email = email;
		this.password = password;
		this.role = role;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	@JsonIgnore
	public String getPassword() {
		return password;
	}
	@JsonProperty
	public void setPassword(String password) {
		this.password = password;
	}

	public AdminRoles getRole() {
		return role;
	}

	public void setRole(AdminRoles role) {
		this.role = role;
	}

	@JsonIgnore
	public List<Orders> getOrdersList() {
		return ordersList;
	}

	public void setOrdersList(List<Orders> ordersList) {
		this.ordersList = ordersList;
	}

	@JsonIgnore
	public List<OrderDetails> getOrderDetailsList() {
		return orderDetailsList;
	}

	public void setOrderDetailsList(List<OrderDetails> orderDetailsList) {
		this.orderDetailsList = orderDetailsList;
	}

	@JsonIgnore
	public Set<SupplierIngredient> getSupplier() {
		return supplierIngredients;
	}

	public void setSupplier(Set<SupplierIngredient> supplierIngredients) {
		this.supplierIngredients = supplierIngredients;
	}

	@Override
	public String toString() {
		return "Administration [name=" +name +", username=" + username + ", email=" + email + ", password=" + password + ", role=" + role + "]";
	}

}
