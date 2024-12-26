package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Ingredient;

public interface IIngredientDao extends JpaRepository<Ingredient, Integer>{

	List<Ingredient> findByNameIn(List<String> list);

	
}
