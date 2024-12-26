package com.app.service;

import java.util.List;

import com.app.pojos.YearlyRevenue;

public interface IYearlyRevenueService {
	YearlyRevenue getThisYearRevenue();
	
	List<YearlyRevenue> getAllYearsRevenue();
}
