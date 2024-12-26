package com.app.service;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.IYearlyRevenueDao;
import com.app.pojos.YearlyRevenue;

@Service
@Transactional
public class YearlyRevenueServiceImpl implements IYearlyRevenueService {

	@Autowired
	private IYearlyRevenueDao yearlyRevenueRepo;
	
	@Override
	public YearlyRevenue getThisYearRevenue() {
		return yearlyRevenueRepo.getThisYearRevenue(LocalDate.now().getYear());
	}

	@Override
	public List<YearlyRevenue> getAllYearsRevenue() {
		return yearlyRevenueRepo.findAll();
	}
	
	

}
