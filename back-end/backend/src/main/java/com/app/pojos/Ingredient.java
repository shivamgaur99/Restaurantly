package com.app.pojos;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ingredients")
public class Ingredient extends BaseEntity {

	@Column(length = 20)
	private String name;

	@OneToMany(mappedBy = "supplier", cascade = CascadeType.ALL, orphanRemoval = true)
	Set<SupplierIngredient> supplier = new HashSet<SupplierIngredient>();

	
	@ManyToMany(cascade = { CascadeType.MERGE, CascadeType.PERSIST }, mappedBy = "ingredients",fetch = FetchType.LAZY)
	List<Menu> menu = new ArrayList<>();

	public Ingredient() {
		System.out.println("In Ctor of " + getClass().getName());
	}

	public Ingredient(String name, Set<SupplierIngredient> supplier, List<Menu> menu) {
		super();
		this.name = name;
		this.supplier = supplier;
		this.menu = menu;
	}
	public Ingredient(String name, List<Menu> menu) {
		super();
		this.name = name;
		this.menu = menu;
	}
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@JsonIgnore
	public Set<SupplierIngredient> getSupplier() {
		return supplier;
	}
	@JsonIgnore
	public void setSupplier(Set<SupplierIngredient> supplier) {
		this.supplier = supplier;
	}
	@JsonIgnore
	public List<Menu> getMenu() {
		return menu;
	}
	@JsonIgnore
	public void setMenu(List<Menu> menu) {
		this.menu = menu;
	}

	@Override
	public String toString() {
		return "Ingredient [name=" + name + "]";
	}

}
