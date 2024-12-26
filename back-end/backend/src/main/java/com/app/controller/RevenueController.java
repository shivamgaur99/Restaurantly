package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.MonthlyRevenue;
import com.app.service.IDailyRevenueService;
import com.app.service.IMonthlyRevenueService;
import com.app.service.IYearlyRevenueService;

@RestController
@RequestMapping("/revenue")
public class RevenueController {
	
	@Autowired
	private IDailyRevenueService dailyRevenueService;
	@Autowired
	private IMonthlyRevenueService monthlyRevenueService;
	@Autowired IYearlyRevenueService yearlyRevenueService;
	
	@GetMapping("/daily")
	public ResponseEntity<?> getTodaysRevenue(){
		return new ResponseEntity<>(dailyRevenueService.getTodaysRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/monthly")
	public ResponseEntity<?> getThisMonthRevenue(){
		return new ResponseEntity<>(monthlyRevenueService.getThisMonthRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/yearly")
	public ResponseEntity<?> getThisYearRevenue(){
		return new ResponseEntity<>(yearlyRevenueService.getThisYearRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/weekly")
	public ResponseEntity<?> getWeeklyRevenue(){
		return new ResponseEntity<>(dailyRevenueService.getWeeklyRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/thisweek")
	public ResponseEntity<?> getThisWeekRevenue() {
		return new ResponseEntity<>(dailyRevenueService.getThisWeekRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/allmonths")
	public ResponseEntity<?> getAllMonthsRevenue(){
		return new ResponseEntity<>(monthlyRevenueService.getAllMothsRevenue(), HttpStatus.OK);
	}
	
	@GetMapping("/allyears")
	public ResponseEntity<?> getAllYearsRevenue(){
		return new ResponseEntity<>(yearlyRevenueService.getAllYearsRevenue(), HttpStatus.OK);
	}
}
