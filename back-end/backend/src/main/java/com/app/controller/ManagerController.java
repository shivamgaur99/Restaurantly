package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ManagerOrderDTO;
import com.app.service.IManagerService;

@RestController
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	private IManagerService managerService;
	
	@GetMapping("/orders")
	public ResponseEntity<?>  getPlacedOrders() {
		return new ResponseEntity<>(managerService.getPlacedOrders(), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addPlacedOrders(@RequestBody ManagerOrderDTO order){
		System.out.println("in add " + order);
		return new ResponseEntity<>(managerService.addPlacedOrders(order),HttpStatus.OK);
	}

}
