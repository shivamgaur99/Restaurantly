package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Administration;
import com.app.pojos.Customer;
import com.app.pojos.OrderStatus;
import com.app.pojos.Orders;

public interface IOrderDao extends JpaRepository<Orders, Integer> {

	
	@Query("select o From Orders o where o.customer.id=:id")
	Optional<Orders> findByCustomer(@Param("id") int id);
	
	@Modifying
	@Query("update Orders o set o.status=:stat where o.customer.id=:cus")
	void changeOrderStatus(@Param("cus") int customer, @Param("stat") OrderStatus status);
	
	@Query("select o from Orders o where o.waiter=:wait and o.status=:stat")
	List<Orders> getUnpaidOrders(@Param("wait") Administration waiter, @Param("stat") OrderStatus status);

	@Query("select o From Orders o where o.customer.id=:id")
	List<Orders> findByCustomerId(@Param("id") int id);
}
