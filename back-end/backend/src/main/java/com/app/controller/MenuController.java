package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.IngredientDTO;
import com.app.dto.MenuDTO;
import com.app.pojos.Ingredient;
import com.app.pojos.Menu;
import com.app.service.IMenuService;

@RestController
@RequestMapping("/menu")
public class MenuController {

	@Autowired
	private IMenuService menuService;

	public MenuController() {
		System.out.println("in ctor of " + getClass().getName());
	}

	// API
	@GetMapping("/getall")
	public ResponseEntity<?> listAllMenus() {
		System.out.println("In List of All Menus");
		// invoke service layer method --
		List<Menu> menus = menuService.getAllMenus();
		if (menus != null)
			return new ResponseEntity<>(menus, HttpStatus.OK);
		// return new ResponseEntity<>(new ResponseDTO("success","List of all
		// menus",menus),HttpStatus.OK);
		return new ResponseEntity<>("Menu List is Empty", HttpStatus.NO_CONTENT);
		// return new ResponseEntity<>(new ResponseDTO("Error","Menu List is
		// Empty",null),HttpStatus.NO_CONTENT);
	}

	@PostMapping("/add")
	public ResponseEntity<?> addMenu(@RequestBody MenuDTO menu) {
		System.out.println("in Add menu");
		return new ResponseEntity<>(menuService.addMenuDetails(menu), HttpStatus.OK);
	}

	@PutMapping("/update/{menuId}")
	public ResponseEntity<?> updateMenu(@PathVariable int menuId, @RequestBody Menu m) {
		System.out.println("in update menu " + menuId + " " + m);
		// Menu updatedDetails = menuService.updateMenuDetails(menuId, m);
		return new ResponseEntity<>(menuService.updateMenuDetails(menuId, m), HttpStatus.OK);

	}

	@GetMapping("/getmenu/{menuId}")
	public ResponseEntity<?> getMenuDetails(@PathVariable int menuId) {
		System.out.println("in get menu " + menuId);
		return new ResponseEntity<>(menuService.getMenuById(menuId), HttpStatus.OK);
	}

	@GetMapping("/getingredient/{menuId}")
	public ResponseEntity<?> getAllIngredients(@PathVariable int menuId) {
		Menu m = menuService.getAllIngredients(menuId);
		List<IngredientDTO> list = new ArrayList<>();
		List<Ingredient> ingredients = m.getIngredients();
		for (Ingredient ingredient : ingredients) {
			list.add(new IngredientDTO(ingredient.getId(), ingredient.getName()));
		}
		return new ResponseEntity<>(list, HttpStatus.OK);

	}
	
	@DeleteMapping("/delete/{menuId}")
    public ResponseEntity<?> deleteMenu(@PathVariable int menuId) {
        System.out.println("in delete menu " + menuId);
        boolean deleted = menuService.deleteMenu(menuId);
        
        if (deleted) {
            return new ResponseEntity<>("Menu deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Menu not found or couldn't be deleted", HttpStatus.NOT_FOUND);
        }
    }

}
