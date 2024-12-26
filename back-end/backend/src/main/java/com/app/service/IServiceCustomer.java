package com.app.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.pojos.Customer;
import com.app.pojos.Feedback;


public interface IServiceCustomer  {
	public Customer registerCustomer(Customer customer);
	public Customer validateCustomer(String username,String password);
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
	public String payBill(int custId);
	public String addFeedBack(Feedback feedback);
	public Optional<Customer> getCustomerDetails(int custId);
	public String updateCustomerDetails(int custId, Customer c);
}
