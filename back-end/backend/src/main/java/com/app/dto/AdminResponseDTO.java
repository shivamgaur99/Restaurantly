package com.app.dto;

import com.app.pojos.AdminRoles;

public class AdminResponseDTO {
	private int id;
	private String name;
	private String username;
	private String email;
	private AdminRoles role;
	private String token;
	public AdminResponseDTO() {
		// TODO Auto-generated constructor stub
	}
	
	
	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getToken() {
		return token;
	}


	public void setToken(String token) {
		this.token = token;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	

	public String getUserName() {
		return username;
	}
	public void setUserName(String userName) {
		this.username = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public AdminRoles getRole() {
		return role;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public AdminResponseDTO(int id, String name, String email, AdminRoles role) {
		super();
		this.id = id;
		this.username = name;
		this.email = email;
		this.role = role;
	}
	
	
	public AdminResponseDTO(int id,String name, String username, String email, AdminRoles role, String token) {
		this.id = id;
		this.name= name;
		this.username = username;
		this.email = email;
		this.role = role;
		this.token = token;
	}
	public void setRole(AdminRoles role) {
		this.role = role;
	}
	
	@Override
	public String toString() {
		return "AdminResponseDTO [name=" + username + ", email=" + email + ", role=" + role + "]";
	}
	
	

}
