package com.app.service;

import java.util.List;

import com.app.pojos.MonthlyRevenue;

public interface IMonthlyRevenueService {
	MonthlyRevenue getThisMonthRevenue();
	
	List<MonthlyRevenue> getAllMothsRevenue();
}
