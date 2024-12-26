package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Administration;
import com.app.pojos.BookingStatus;
import com.app.pojos.Customer;
import com.app.pojos.RestaurantTable;

public interface IRestaurantTableDao extends JpaRepository<RestaurantTable, Integer> {
	RestaurantTable findBytableNo(int tableNo);

	@Modifying
	@Query("update RestaurantTable t set t.customer=NULL where t.tableNo=:tableNo")
	void removeCustomerFromTable(@Param("tableNo") int tableNo);
	
	List<RestaurantTable> findByStatus(BookingStatus status);
	
	RestaurantTable findByTableNo(int tableNo);
	
	@Modifying
	@Query("update RestaurantTable t set t.status=:stat, t.customer=NULL,t.waiter=NULL where t.customer.id=:cust")
	void changeTableStatus(@Param("cust") int customer,@Param("stat") BookingStatus status);
	
	RestaurantTable findByWaiter(Administration waiter);

	RestaurantTable findByCustomer(Customer customer);

	@Modifying
	@Query("update RestaurantTable t set t.status=:stat,t.customer.id=:id1 where t.tableNo=:id")
	String updateTable(@Param("stat") BookingStatus b,@Param("id1") int id1,@Param("id") int id );
}
