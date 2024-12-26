package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Ingredient;
import com.app.pojos.Menu;

public interface IIngredientService {


	public List<Ingredient> getAllIngredients();
	
	public Ingredient addIngredientDetails(Ingredient ingredient);

//	public Ingredient updateIngredientDetails(int ingredientId, Ingredient i);

	public Ingredient getIngredientById(int ingredientId);

	public List<Ingredient> getAllIngredient();
}
