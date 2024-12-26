package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ManagerOrders;

public interface IManagerDao extends JpaRepository<ManagerOrders, Integer> {
	List<ManagerOrders> findByCustId(int id);
}
