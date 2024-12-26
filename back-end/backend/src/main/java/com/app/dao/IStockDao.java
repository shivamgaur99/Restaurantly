package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Stock;

public interface IStockDao extends JpaRepository<Stock, Integer> {

	 
//	@Query("select * from Ingredient i left join Cart c on i.id=c.ingredient.id")
//	Optional<List<StockDTO>> getStock();
	
	
	
}
