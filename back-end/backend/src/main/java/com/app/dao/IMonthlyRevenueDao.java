package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.MonthlyRevenue;
import com.app.pojos.MonthlyRevenuePk;

public interface IMonthlyRevenueDao extends JpaRepository<MonthlyRevenue, MonthlyRevenuePk> {
	@Query("select m from MonthlyRevenue m where m.id.month=:mon and m.id.year=:yr")
	MonthlyRevenue getThisMonthRevenue(@Param("mon") String month, @Param("yr") int year);
}
