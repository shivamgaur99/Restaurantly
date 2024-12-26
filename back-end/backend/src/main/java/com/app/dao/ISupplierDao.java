package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.SupplierIngredient;

public interface ISupplierDao extends JpaRepository<SupplierIngredient, Integer>{

	
	      @Query("select s from SupplierIngredient s join fetch s.ingredient where s.supplier.id=:id")
	      List<SupplierIngredient> supplier(@Param("id") int id);

	        Optional<SupplierIngredient> findBySupplierId(int id);

	        @Modifying
	        @Query("delete from SupplierIngredient s where s.supplier.id=:id1 and s.ingredient.id=:id2")
			void deleteBy(@Param("id1") int id1,@Param("id2") int id2);

			 @Query("select s from SupplierIngredient s join fetch s.ingredient where s.ingredient.id=:id")
	      List<SupplierIngredient> ingredient(@Param("id") int id);

			
             
	               
}
