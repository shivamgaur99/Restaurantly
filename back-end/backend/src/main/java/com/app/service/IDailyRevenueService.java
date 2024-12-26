package com.app.service;

import java.util.List;

import com.app.pojos.DailyRevenue;

public interface IDailyRevenueService {
	DailyRevenue getTodaysRevenue();
	
	double getWeeklyRevenue();
	
	List<DailyRevenue> getThisWeekRevenue();
}
