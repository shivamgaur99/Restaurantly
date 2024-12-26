package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Cart;
import com.app.pojos.CartPk;

public interface ICartDao extends JpaRepository<Cart, CartPk> {
	List<Cart> findByCustomerId(int customerId);
	
	@Modifying
	@Query("delete from Cart c where c.customer.id=:id")
	void deleteCustomerCart(@Param("id") int id);
}
