package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.dto.StockDTO;
import com.app.pojos.AdminRoles;
import com.app.pojos.Administration;
import com.app.pojos.Feedback;

public interface IAdminService {

	public Administration validateAdmin(String username, String password);

	public Administration registerAdmin(Administration admin);

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

	

	String addStock(StockDTO s);

	List<StockDTO> getAllStock();
	
	public List<Administration> getAll(AdminRoles role);

	public Optional<Administration> getAdminDetails(int adminId);

	public String updateAdminDetails(int adminId, Administration a);

	public List<Feedback> getFeedBack();
}
