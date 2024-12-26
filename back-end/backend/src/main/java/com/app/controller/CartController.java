package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDTO;
import com.app.service.ICartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	private ICartService cartService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto){
		System.out.println("int add to Cart " + cartDto);
		return ResponseEntity.ok(cartService.addToCart(cartDto));
	}
	
	@DeleteMapping("/delete/{custId}/{menuId}")
	public ResponseEntity<?> deleteFromCart(@PathVariable int custId, @PathVariable int menuId){
		
		return new ResponseEntity<>(cartService.deleteFromCart(custId, menuId), HttpStatus.OK);
	}
	
	@PostMapping("/update/{custId}/{menuId}/{qty}")
	public ResponseEntity<?> updateCartQuanity(@PathVariable int custId, @PathVariable int menuId, @PathVariable int qty){
		System.out.println("In Update Controller " + custId + " " + menuId + " " + qty);
		return new ResponseEntity<>(cartService.updateCartQuanity(custId, menuId, qty), HttpStatus.OK);
	}
    
	@GetMapping("/getcart/{custId}")
	public ResponseEntity<?> getAllItems(@PathVariable int custId){
		return new ResponseEntity<>(cartService.getAllItems(custId), HttpStatus.OK);
	}
}
