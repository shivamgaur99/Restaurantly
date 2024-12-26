package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Customer;

public interface ICustomerDao extends JpaRepository<Customer, Integer> {

//	   Optional<Customer> findByEmailAndPassword(String email,String password);

	@Query("select c from Customer c left outer join fetch c.orders where c.id=:id")
	Optional<Customer> getAllOrder(@Param("id") int id);

	Customer findByUsername(String username);
}
