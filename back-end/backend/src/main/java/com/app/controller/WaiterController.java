package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.IOrderDetailsService;
import com.app.service.IWaiterService;

@RestController
@RequestMapping("/waiter")
public class WaiterController {

	@Autowired
	private IWaiterService waiterService;
	@Autowired
	private IOrderDetailsService orderDetailsService;

	@PostMapping("/assign/{waiterId}/{tableNo}")
	public ResponseEntity<?> assignWaiter(@PathVariable int waiterId, @PathVariable int tableNo) {
		return new ResponseEntity<>(waiterService.assignWaiter(waiterId, tableNo), HttpStatus.OK);
	}
	
	//Change status for Order details for given Order
	@PostMapping("/order/{orderId}")
	public ResponseEntity<?> changeStatusToServed(@PathVariable int orderId){
		return new ResponseEntity<>(orderDetailsService.changeOrderDetailStatus(orderId), HttpStatus.OK);
	}
	
	@GetMapping("/getorder/{waiterId}")
	public ResponseEntity<?> getPreparedOrders(@PathVariable int waiterId){
		return new ResponseEntity<>(waiterService.getPreparedOrders(waiterId),HttpStatus.OK);
	}
}
