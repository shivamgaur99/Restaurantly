package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_excs.AdminHandlingException;
import com.app.dao.IAdminDao;
import com.app.dao.IFeedBackDao;
import com.app.dao.IIngredientDao;
import com.app.dao.IStockDao;
import com.app.dto.IngredientDTO;
import com.app.dto.StockDTO;
import com.app.pojos.AdminRoles;
import com.app.pojos.Administration;
import com.app.pojos.Feedback;
import com.app.pojos.Ingredient;
import com.app.pojos.Stock;


@Service
@Transactional
@Primary
public class AdminServiceImpl implements IAdminService, UserDetailsService {

	@Autowired
	private IAdminDao adminRepo;

	@Autowired
	private IStockDao stockRepo;

	@Autowired
	private IIngredientDao ingredientService;
	
	@Autowired
	private IFeedBackDao feedbackService;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public Administration validateAdmin(String username, String password) {
		Administration a = adminRepo.findByUsername(username);
		System.out.println(a);
		return a;
	}

	@Override
	public Administration registerAdmin(Administration admin) {
		try {
			adminRepo.save(admin);
			return admin;
		} catch (RuntimeException ex) {
			throw new AdminHandlingException("Failed to Register Customer");
		}

	}

	@Override
	public List<StockDTO> getAllStock() {
		List<StockDTO> stocks = new ArrayList<StockDTO>();
		List<Ingredient> ingredients = ingredientService.findAll();

		List<IngredientDTO> list = new ArrayList<IngredientDTO>();
		for (Ingredient ingredient : ingredients) {

			list.add(new IngredientDTO(ingredient.getId(), ingredient.getName()));
		}

		for (IngredientDTO ingredientDTO : list) {
			Stock s = stockRepo.getOne(ingredientDTO.getId());

			stocks.add(new StockDTO(ingredientDTO.getId(), ingredientDTO.getName(), s.getQty()));
		}

		return stocks;

	}

	@Override
	public String addStock(StockDTO s) {

		Stock stock = stockRepo.getOne(s.getId());
		try {
			stock.setQty(s.getQty() + stock.getQty());
			stockRepo.save(stock);
			return "Stock updated successfully";
		} catch (Exception e) {
			return "fail to add stock";
		}

	}
	
	
	
	@Override
	public List<Feedback> getFeedBack() {

		return feedbackService.findAll(); 
	}

	public List<Administration> getAll(AdminRoles role)
	{
		return adminRepo.findAllByRole(role);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Administration user = adminRepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	@Override
	public Optional<Administration> getAdminDetails(int adminId) {
		System.out.println("In Administration service , adminId : "+adminId);	
		return adminRepo.findById(adminId);
	}

	@Override
	public String updateAdminDetails(int adminId, Administration a) {
		System.out.println("Administration Service Impl : "+getClass().getName());
		Administration admin = adminRepo.getOne(adminId);
		
		admin.setName(a.getName());
		admin.setEmail(a.getEmail());
		admin.setUsername(a.getUsername());
		admin.setRole(a.getRole());
//		admin.setPassword(bcryptEncoder.encode(a.getPassword()));  
	//	System.out.println("Before: "+a.getPassword()+" After: "+bcryptEncoder.encode(a.getPassword()));
		System.out.println("Here " + admin);
		adminRepo.save(admin);
		return a.getName()+" updated successfully";
	}

}
