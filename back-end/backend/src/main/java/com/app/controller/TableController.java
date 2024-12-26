package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TableDTO;
import com.app.pojos.BookingStatus;
import com.app.pojos.RestaurantTable;
import com.app.service.ITableService;

@RestController
@RequestMapping("/table")
public class TableController {

	@Autowired
	private ITableService tService;
	
	public TableController() {
		System.out.println("in ctor of Table Controller...");
	}
	
	@GetMapping
	ResponseEntity<?> getAllTableList(){
		System.out.println("in get all tables list ");
		List<TableDTO> list=new ArrayList<TableDTO>();
		List<RestaurantTable> tables = tService.getTableList();
		if(tables==null)
			 return new ResponseEntity<>("Table List is Empty",HttpStatus.OK);
		for (RestaurantTable t : tables) {
			try {
				list.add(new TableDTO(t.getTableNo(), t.getCapacity(), t.getStatus(), t.getWaiter().getId(), t.getCustomer().getId()));
			} catch (Exception e) {
				if(t.getWaiter()!=null && t.getCustomer()==null)
				list.add(new TableDTO(t.getTableNo(), t.getCapacity(), t.getStatus(), t.getWaiter().getId(),0));
				 if(t.getCustomer()!=null && t.getWaiter()==null)
					list.add(new TableDTO(t.getTableNo(), t.getCapacity(), t.getStatus(), 0,t.getCustomer().getId()));
				 if(t.getCustomer()==null && t.getWaiter()==null)
						list.add(new TableDTO(t.getTableNo(), t.getCapacity(), t.getStatus(), 0,0));
				continue;
			}
		}
		
			
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@PostMapping("/add")
	ResponseEntity<?> addTable(@RequestBody TableDTO table)
	{
		System.out.println("in add Table ");
		return new ResponseEntity<>(tService.addTableDetails(table),HttpStatus.OK);
	}
	
	@PostMapping("/book")
	ResponseEntity<?> bookTable(@RequestBody TableDTO table)
	{
		System.out.println("in Book Table...");
		return new ResponseEntity<>(tService.bookTable(table),HttpStatus.OK);
	}
	
	@PutMapping("/free/{tableNo}")
	ResponseEntity<?> freeTable(@PathVariable int tableNo)
	{
		System.out.println("in Free Table...");
		return new ResponseEntity<>(tService.freeTable(tableNo),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{tableNo}")
	ResponseEntity<?> deleteTable(@PathVariable int tableNo)
	{
		System.out.println("in Detete Table...");
		return new ResponseEntity<>(tService.deleteTable(tableNo),HttpStatus.OK);
	}
	
	@GetMapping("/freetables")
	ResponseEntity<?> freeTableList(){
		System.out.println("in get all Free tables list ");
		List<RestaurantTable> tables = tService.getFreeTableList(BookingStatus.FREE);
		if(tables.isEmpty())
			 return new ResponseEntity<>("Table List is Empty",HttpStatus.OK);
			
		return new ResponseEntity<>(tables,HttpStatus.OK);
	}
}
