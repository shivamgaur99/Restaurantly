package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.YearlyRevenue;

public interface IYearlyRevenueDao extends JpaRepository<YearlyRevenue, Integer> {
	@Query("select y from YearlyRevenue y where y.year=:yr")
	YearlyRevenue getThisYearRevenue(@Param("yr") int year);
}
