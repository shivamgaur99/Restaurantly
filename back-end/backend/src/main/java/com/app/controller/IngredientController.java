package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Ingredient;
import com.app.service.IIngredientService;

@RestController
@RequestMapping("/ingredients")
public class IngredientController {

	@Autowired
	private IIngredientService iService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addIngredient(@RequestBody Ingredient ingredient)
	{
		System.out.println("in in Add Ingredient ...");
		return new ResponseEntity<>(iService.addIngredientDetails(ingredient), HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getIngredientById(@PathVariable int id)
	{
		System.out.println("in in Get Ingredient ...");
		return new ResponseEntity<>(iService.getIngredientById(id), HttpStatus.OK);
	}
	
	@GetMapping("/list")
	public ResponseEntity<?> getAllIngredient()
	{
		System.out.println("in in Get All Ingredient ...");
		return new ResponseEntity<>(iService.getAllIngredient(), HttpStatus.OK);
	}
	
	
}


