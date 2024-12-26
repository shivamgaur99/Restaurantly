package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IIngredientDao;
import com.app.pojos.Ingredient;

@Service
@Transactional
public class IngredientServiceImpl implements IIngredientService{

	@Autowired
	private IIngredientDao iDao;
	
	@Override
	public List<Ingredient> getAllIngredients() {
		System.out.println("in get all ingredient");
		return iDao.findAll();
	}

	@Override
	public Ingredient addIngredientDetails(Ingredient ingredient) {
		System.out.println("in add ingredient");
		return iDao.save(ingredient);
	}

	@Override
	public Ingredient getIngredientById(int ingredientId) {
		System.out.println("In service get ingredients....id = "+ingredientId);;
		Ingredient i = iDao.findById(ingredientId).get();
		return i;
	}

	@Override
	public List<Ingredient> getAllIngredient() {
		System.out.println("In service get List of ingredients....");
		return iDao.findAll();
	}

}
