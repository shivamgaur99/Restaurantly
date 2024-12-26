package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IChefService;
import com.app.service.IOrderService;

@RestController
@RequestMapping("/chef")
public class ChefController {

	@Autowired
	private IOrderService orderService;
	@Autowired
	private IChefService chefService;
	
	@PostMapping("/prepared/{chefId}/{orderId}")
	public ResponseEntity<?> preparedOrder(@PathVariable int chefId, @PathVariable int orderId)
	{
		
		System.out.println("in prepared order "+chefId);
		return new ResponseEntity<>(orderService.preparedOrder(chefId, orderId), HttpStatus.OK);
	}
	
	@GetMapping("/approvedorders/{chefId}")
	public ResponseEntity<?> approvedOrders(@PathVariable int chefId)
	{
		return new ResponseEntity<>(chefService.getAllApprovedOrders(chefId), HttpStatus.OK);
	}
}
