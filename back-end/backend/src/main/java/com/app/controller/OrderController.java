package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrderDTO;
import com.app.service.IOrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private IOrderService orderService;
	
	

	@PostMapping("/add")
	public ResponseEntity<?> addOrder(@RequestBody OrderDTO orderDto) {
		System.out.println("In add Orders " + orderDto);
		return new ResponseEntity<>(orderService.addOrder( orderDto.getChefId(),
				orderDto.getCustomerId(), orderDto.getCategory()), HttpStatus.OK);
	}
	
	@PostMapping("/cancel/{orderId}")
	public ResponseEntity<?> cancelOrder(@PathVariable int orderId)
	{
		
		System.out.println("in cancel order "+orderId);
		return new ResponseEntity<>(orderService.cancelOrder(orderId), HttpStatus.OK);
	}
	
	
	
	
	
}
