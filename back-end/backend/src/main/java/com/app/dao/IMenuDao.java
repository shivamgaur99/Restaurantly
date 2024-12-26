package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.dto.MenuDTO;
import com.app.pojos.Menu;

public interface IMenuDao extends JpaRepository<Menu, Integer>{

	Optional<Menu> findByMenuName(String menu_name);

	@Query("select m from Menu m Join fetch m.ingredients ")
	Optional<Menu> searchMenu();

	@Query("select m from Menu m Join fetch m.ingredients where m.id=:id ")
	Optional<Menu> getMenu(@Param("id") int menuId);


}


