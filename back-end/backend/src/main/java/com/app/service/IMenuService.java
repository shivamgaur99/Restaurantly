package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.MenuDTO;
import com.app.pojos.Menu;

public interface IMenuService {

	public List<Menu> getAllMenus();
	
	public String addMenuDetails(MenuDTO menu);

	public String updateMenuDetails(int menuId, Menu m);

	public Optional<Menu> getMenuById(int menuId);
	public Menu getAllIngredients(int menuId);

	public boolean deleteMenu(int menuId);
}
