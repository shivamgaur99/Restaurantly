package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IIngredientDao;
import com.app.dao.IMenuDao;
import com.app.dto.MenuDTO;
import com.app.pojos.Menu;

@Service
@Transactional
public class MenuServiceImpl implements IMenuService {

	@Autowired
	private IMenuDao menuRepo;

	@Autowired
	private IIngredientDao ingredientRepo;
	
	@Override
	public List<Menu> getAllMenus() {
		System.out.println("Menu Service Impl : "+getClass().getName());
		return menuRepo.findAll();
	}

	@Override
	public String addMenuDetails(MenuDTO menu) {
		Menu m = new Menu(menu.getMenuName(), menu.getPrice(), menu.getCategory());
		for(int i : menu.getIngredientId()) {
			m.getIngredients().add(ingredientRepo.getOne(i));
		}
		menuRepo.save(m);
		return "Menu Added Successfully";
	}

	@Override
	public String updateMenuDetails(int menuId, Menu m) {
//		System.out.println("Menu Service Impl : "+ getClass().getName());
		Menu menu = menuRepo.getOne(menuId);
		menu.setMenuName(m.getMenuName());
		menu.setCategory(m.getCategory());
		menu.setPrice(m.getPrice());
		System.out.println("Here " + menu);
		menuRepo.save(menu);
		return "Updated " + m.getMenuName() + " successfully";
	}

	@Override
	public Optional<Menu> getMenuById(int menuId) {
		System.out.println("Menu Service Impl : "+getClass().getName());
		return menuRepo.findById(menuId);
	}
	
	@Override
	public Menu getAllIngredients(int menuId)
	{
		
		System.out.println("menuservice "+getClass().getName());
		
		return menuRepo.getMenu(menuId).get();
	}

	@Override
	public boolean deleteMenu(int menuId) {
		Optional<Menu> optionalMenu = menuRepo.findById(menuId);
	    if (optionalMenu.isPresent()) {
	        menuRepo.delete(optionalMenu.get());
	        return true; // Menu deleted successfully
	    } else {
	        return false; // Menu not found or couldn't be deleted
	    }
//		return false;
	}
	
}
