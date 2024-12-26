package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.DailyRevenue;

public interface IDailyRevenueDao extends JpaRepository<DailyRevenue, Integer> {
	DailyRevenue findByDate(LocalDate date);
	
	List<DailyRevenue> findByDateBetween(LocalDate start, LocalDate end);
}
