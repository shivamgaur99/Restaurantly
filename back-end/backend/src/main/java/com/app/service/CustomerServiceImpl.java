package com.app.service;

import java.util.ArrayList;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_excs.CustomerHandlingException;
import com.app.dao.ICustomerDao;
import com.app.dao.IFeedBackDao;
import com.app.dao.IOrderDao;
import com.app.dao.IRestaurantTableDao;
import com.app.pojos.BookingStatus;
import com.app.pojos.Customer;
import com.app.pojos.Feedback;
import com.app.pojos.OrderStatus;

@Service
@Transactional

public class CustomerServiceImpl implements IServiceCustomer, UserDetailsService {

	@Autowired
	private ICustomerDao customerRepo;

	@Autowired
	private IOrderDao orderRepo;
	@Autowired
	private IRestaurantTableDao restaurantTableRepo;

	@Autowired
	private IFeedBackDao feedBackRepo;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public Customer registerCustomer(Customer customer) {
		try {
			customerRepo.save(customer);
			return customer;
		} catch (RuntimeException ex) {
			throw new CustomerHandlingException("Failed to Register Customer");
		}
	}

	public String addFeedBack(Feedback feedback) {

		try {
			feedBackRepo.save(feedback);
			return "feedback saved ";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "falied to five feedback";
		}
	}

	@Override
	public Customer validateCustomer(String username, String password) {
		return customerRepo.findByUsername(username);

	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Customer user = customerRepo.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}

	@Override
	public String payBill(int custId) {
		System.out.println(custId);
		orderRepo.changeOrderStatus(customerRepo.getOne(custId).getId(), OrderStatus.PAID);
		restaurantTableRepo.changeTableStatus(customerRepo.getOne(custId).getId(), BookingStatus.FREE);
		return "Successfully Paid the bill";
	}

	@Override
	public Optional<Customer> getCustomerDetails(int custId) {
		System.out.println("In customer service , custId : " + custId);
		return customerRepo.findById(custId);
	}

	@Override
	public String updateCustomerDetails(int custId, Customer c) {
		System.out.println("Customer Service Impl : " + getClass().getName());
		Customer customer = customerRepo.getOne(custId);

		customer.setName(c.getName());
		customer.setEmail(c.getEmail());
		customer.setContact(c.getContact());
		customer.setUsername(c.getUsername());
		customer.setPassword(bcryptEncoder.encode(c.getPassword()));
		System.out.println("Here " + customer);
		customerRepo.save(customer);
		return "Customer " + c.getName() + " Updated successfully";
	}

}
