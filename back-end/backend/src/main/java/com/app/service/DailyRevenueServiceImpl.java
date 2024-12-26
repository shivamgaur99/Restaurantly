package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IDailyRevenueDao;
import com.app.pojos.DailyRevenue;

@Service
@Transactional
public class DailyRevenueServiceImpl implements IDailyRevenueService {
	
	@Autowired
	private IDailyRevenueDao dailyRevenueRepo;
	
	@Override
	public DailyRevenue getTodaysRevenue() {
		return dailyRevenueRepo.findByDate(LocalDate.now());
	}

	@Override
	public double getWeeklyRevenue() {
		int day = LocalDate.now().getDayOfWeek().getValue();
		LocalDate start = LocalDate.now().minusDays(day-1);
		LocalDate end = LocalDate.now().plusDays(7 - day);
		 List<DailyRevenue> weekly = dailyRevenueRepo.findByDateBetween(start, end);
		 double amount = 0;
		 for(DailyRevenue d : weekly) {
			 amount += d.getAmount();
		 }
		 return amount;
	}

	@Override
	public List<DailyRevenue> getThisWeekRevenue() {
		int day = LocalDate.now().getDayOfWeek().getValue();
		LocalDate start = LocalDate.now().minusDays(day-1);
		LocalDate end = LocalDate.now().plusDays(7 - day);
		return dailyRevenueRepo.findByDateBetween(start, end);
	}
	
	
	
	

}
