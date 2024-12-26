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

import com.app.dto.SupplierDTO;
import com.app.pojos.SupplierIngredientPk;
import com.app.service.SupplierServiceImpl;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

	@Autowired
	private SupplierServiceImpl supplierService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewIngredient(@RequestBody SupplierDTO supplier)
	{
		return new ResponseEntity<>(supplierService.addSupplierIngredient(supplier), HttpStatus.OK);
                    		
		
	}
	@GetMapping("/get/{supplierId}")
	public ResponseEntity<?> getMyIngredients(@PathVariable int supplierId)
	{
		
		return new ResponseEntity<>(supplierService.getIngredients(supplierId),HttpStatus.OK);
		}
	@GetMapping("/getingredinet/{ingredientId}")
	public ResponseEntity<?> getAllSupplier(@PathVariable int ingredientId)
	{
		
		return new ResponseEntity<>(supplierService.getSupplierWithIngredients(ingredientId),HttpStatus.OK);
		}
	
	 @PostMapping("/update")
	 public ResponseEntity<?> updatePrice( @RequestBody SupplierDTO supplier)
	 {
		 
		 return new ResponseEntity<>(supplierService.updateIngredient(supplier),HttpStatus.OK);
	 }
	 
	 @DeleteMapping("/{customerId}")
	 public ResponseEntity<?> deleteIngredient(@RequestBody SupplierIngredientPk s)
	 {
		 System.out.println(s.getSupplier() + " "+s.getIngredient() );
		 
		 
		 return new ResponseEntity<>(supplierService.deleteIngredient(s),HttpStatus.OK);
	 }
}
