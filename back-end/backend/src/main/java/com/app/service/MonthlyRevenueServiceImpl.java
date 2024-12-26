package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IMonthlyRevenueDao;
import com.app.pojos.MonthlyRevenue;

@Service
@Transactional
public class MonthlyRevenueServiceImpl implements IMonthlyRevenueService {
	
	@Autowired
	private IMonthlyRevenueDao monthlyRevenueRepo;

	@Override
	public MonthlyRevenue getThisMonthRevenue(){
		LocalDate date = LocalDate.now();
		String month = date.getMonth().toString();
		int year = date.getYear();
		return monthlyRevenueRepo.getThisMonthRevenue(month, year);
	}

	@Override
	public List<MonthlyRevenue> getAllMothsRevenue() {
		return monthlyRevenueRepo.findAll();
	}
	
	

}
