package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.AdminRoles;
import com.app.pojos.Administration;

public interface IAdminDao extends JpaRepository<Administration, Integer>  {

	@Query("select a from Administration a where a.email=:em and a.password=:pw")
	 Optional<Administration> validateAdmin(@Param("em") String email,@Param("pw") String password);

	 Administration findByUsername(String username);
	 
	 
	 List<Administration> findAllByRole(AdminRoles role);	
}
