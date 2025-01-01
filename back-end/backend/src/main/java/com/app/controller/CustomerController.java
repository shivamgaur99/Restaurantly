package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.JwtTokenUtil;
import com.app.dto.CustomerResponseDTO;
import com.app.dto.ErrorResponse;
import com.app.dto.OrderResponseDTO;
import com.app.model.JwtRequest;
import com.app.pojos.Customer;
import com.app.pojos.Feedback;
import com.app.pojos.Orders;
import com.app.service.IOrderService;
import com.app.service.IServiceCustomer;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

	public CustomerController() {
		System.out.println("In ctor of " + getClass().getClass().getName());

	}
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private IServiceCustomer customerService;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private IOrderService orderService;

	@PostMapping("/register")
	public ResponseEntity<?> registerCustomer(@RequestBody Customer customer) {
		System.out.println("Customer is " + customer);
		Customer c = new Customer(customer.getName(), customer.getUsername(), customer.getContact(),
				customer.getEmail(), bcryptEncoder.encode(customer.getPassword()), customer.getAddress());
		return new ResponseEntity<>(customerService.registerCustomer(c), HttpStatus.OK);

	}

	@PostMapping("/login")
	public ResponseEntity<?> validateCustomer(@RequestBody JwtRequest login) {
	    try {
	        // Authenticate the user (throws exception if credentials are invalid)
	        authenticate(login.getUsername(), login.getPassword());
	    } catch (BadCredentialsException e) {
	        // Return 401 Unauthorized if authentication fails
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body(new ErrorResponse("Invalid username or password", e.getMessage()));
	    } catch (Exception e) {
	        // Handle other exceptions
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body(new ErrorResponse("An error occurred while processing your request", e.getMessage()));
	    }

	    // Load user details from the service (if authentication passes)
	    final UserDetails userDetails = customerService.loadUserByUsername(login.getUsername());

	    // Validate customer credentials (checking if customer exists)
	    Customer customer = customerService.validateCustomer(login.getUsername(), login.getPassword());
	    if (customer == null) {
	        // If customer is not found or password doesn't match
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
	                .body(new ErrorResponse("Invalid username or password", "Invalid credentials or account not found"));
	    }

	    // Generate JWT token
	    final String token = jwtTokenUtil.generateToken(userDetails);

	    // Return customer details and JWT token
	    return ResponseEntity.ok(new CustomerResponseDTO(
	            customer.getId(),
	            customer.getName(),
	            customer.getUsername(),
	            customer.getEmail(),
	            customer.getContact(),
	            token
	    ));
	}

	
	@PostMapping("/feedback")
	public ResponseEntity<?> addFeedBack(@RequestBody Feedback feedback)
	{
		return new ResponseEntity<>(customerService.addFeedBack(feedback),HttpStatus.OK);
	}
	
	@GetMapping("/getallorders/{custId}")
	public ResponseEntity<?> getAllOrders(@PathVariable int custId) {
                     List<Orders> list= (orderService.getAllOrders(custId));
                     List<OrderResponseDTO> orders=new ArrayList<OrderResponseDTO>();
                     for (Orders order : list) {
						orders.add(new OrderResponseDTO(order.getId(), order.getAmount(), order.getStatus(),order.getDate()));
					}
 	 return new ResponseEntity<>(orders,HttpStatus.OK);
	}

	@GetMapping("/paybill/{custId}")
	public ResponseEntity<?> payBillHere(@PathVariable int custId){
		System.out.println(custId);
		return new ResponseEntity<>(customerService.payBill(custId), HttpStatus.OK);
	}
	
	@GetMapping("/get/{custId}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable int custId){
		return new ResponseEntity<>(customerService.getCustomerDetails(custId).get(), HttpStatus.OK);
	}

	@PutMapping("/update/{custId}")
	public ResponseEntity<?> updateCustomer(@PathVariable int custId, @RequestBody Customer c){
		System.out.println("in update Customer "+custId+" "+c);
		return new ResponseEntity<>(customerService.updateCustomerDetails(custId, c), HttpStatus.OK);
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
}



