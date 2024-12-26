package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.OrderDetails;
import com.app.pojos.OrderDetailsStatus;
import com.app.pojos.Orders;

public interface IOrderDetailsDao extends JpaRepository<OrderDetails, Integer> {

	
	@Query("select o from OrderDetails o where o.order.id=:id")
	List<OrderDetails> findByOrderId(@Param("id") int id);
	
	@Query("select o from OrderDetails o where o.chef.id=:id")
	List<OrderDetails> findByChefId(@Param("id") int id);
	
	@Modifying
	@Query("update OrderDetails o set o.status=:stat where o.order=:ord")
	void changOrderDetailsStatus(@Param("ord") Orders order, @Param("stat") OrderDetailsStatus status);
	
	@Query("select o from OrderDetails o where o.order=:ord and o.status=:stat")
	List<OrderDetails> getPreparedOrders(@Param("ord") Orders order, @Param("stat") OrderDetailsStatus status);
	
}
