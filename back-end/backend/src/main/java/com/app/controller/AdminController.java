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
import com.app.dto.AdminResponseDTO;
import com.app.dto.StockDTO;
import com.app.model.JwtRequest;
import com.app.pojos.AdminRoles;
import com.app.pojos.Administration;
import com.app.pojos.Feedback;
import com.app.service.IAdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private IAdminService adminService;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@PostMapping("/login")
	public ResponseEntity<?> validateAdmin(@RequestBody JwtRequest login) {
		try {
			authenticate(login.getUsername(), login.getPassword());
		} catch (Exception e) {

			e.printStackTrace();
		}

		final UserDetails userDetails = adminService.loadUserByUsername(login.getUsername());

		Administration a = adminService.validateAdmin(login.getUsername(), bcryptEncoder.encode(login.getPassword()));
		System.out.println(a);
		final String token = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AdminResponseDTO(a.getId(),a.getName(), a.getUsername(), a.getEmail(), a.getRole(), token));
	}

	// Register Administration Person
	@PostMapping("/register")
	public ResponseEntity<?> registerAdmin(@RequestBody Administration admin) {
		System.out.println("In Register Admin " + admin);
		Administration newAdmin = new Administration();
		newAdmin = new Administration(admin.getName(), admin.getUsername(), admin.getEmail(),
				bcryptEncoder.encode(admin.getPassword()), admin.getRole());
		return new ResponseEntity<>(adminService.registerAdmin(newAdmin), HttpStatus.OK);
	}

	@GetMapping("/stocks")
	public ResponseEntity<?> getStock() {

		return new ResponseEntity<>(adminService.getAllStock(), HttpStatus.OK);

	}

	@PostMapping("/updatestock")
	public ResponseEntity<?> addStock(@RequestBody StockDTO stock) {

		return new ResponseEntity<>(adminService.addStock(stock), HttpStatus.OK);

	}

	@GetMapping("suppliers")
	public ResponseEntity<?> getAllWaiters() {
		List<AdminResponseDTO> waiters = new ArrayList<AdminResponseDTO>();

		List<Administration> a = adminService.getAll(AdminRoles.SUPPLIER);
		for (Administration administration : a) {
			waiters.add(new AdminResponseDTO(administration.getId(), administration.getUsername(),
					administration.getEmail(), administration.getRole()));
		}

		return new ResponseEntity<>(waiters, HttpStatus.OK);
	}

	@GetMapping("waiters")
	public ResponseEntity<?> getAllSuppliers() {
		List<AdminResponseDTO> waiters = new ArrayList<AdminResponseDTO>();

		List<Administration> a = adminService.getAll(AdminRoles.WAITER);
		for (Administration administration : a) {
			waiters.add(new AdminResponseDTO(administration.getId(), administration.getUsername(),
					administration.getEmail(), administration.getRole()));
		}

		return new ResponseEntity<>(waiters, HttpStatus.OK);
	}

	@GetMapping("/feedback")
	public ResponseEntity<?> getFeedBack()
	{
		return new ResponseEntity<>(adminService.getFeedBack(),HttpStatus.OK);
	}
	@GetMapping("chefs")
	public ResponseEntity<?> getAllChefs() {
		List<AdminResponseDTO> waiters = new ArrayList<AdminResponseDTO>();

		List<Administration> a = adminService.getAll(AdminRoles.CHEF);
		for (Administration administration : a) {
			waiters.add(new AdminResponseDTO(administration.getId(), administration.getUsername(),
					administration.getEmail(), administration.getRole()));
		}

		return new ResponseEntity<>(waiters, HttpStatus.OK);
	}

	@GetMapping("/get/{adminId}")
	public ResponseEntity<?> getAdminDetails(@PathVariable int adminId) {
		return new ResponseEntity<>(adminService.getAdminDetails(adminId).get(), HttpStatus.OK);
	}

	@PostMapping("/update/{adminId}")
	public ResponseEntity<?> updateAdminDetails(@PathVariable int adminId, @RequestBody Administration a) {
		System.out.println("in update Administration " + adminId + " " + a);
		return new ResponseEntity<>(adminService.updateAdminDetails(adminId, a), HttpStatus.OK);
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
